import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

type RangeKey = "week" | "month";
type FilterKey = "all" | "late" | "early" | "absent";

const toLocalDateISO = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getLocalDayFromISO = (dateISO: string) => {
  const [year, month, day] = dateISO.split("-").map(Number);
  return new Date(year, month - 1, day).getDay();
};

const getWeekStart = (date: Date) => {
  const day = date.getDay();
  const diff = (day + 6) % 7;
  const start = new Date(date);
  start.setDate(date.getDate() - diff);
  start.setHours(0, 0, 0, 0);
  return start;
};

const isWorkingDay = (dateISO: string, workingDays: number[]) => {
  const day = getLocalDayFromISO(dateISO);
  return workingDays.includes(day);
};

const getWeekRange = (today: Date, workingDays: number[], includeFuture: boolean) => {
  const start = getWeekStart(today);
  const dates: string[] = [];
  for (let offset = 0; offset < 7; offset += 1) {
    const next = new Date(start);
    next.setDate(start.getDate() + offset);
    if (!includeFuture && next > today) break;
    dates.push(toLocalDateISO(next));
  }
  return dates.filter((day) => isWorkingDay(day, workingDays));
};

const getMonthRange = (
  today: Date,
  workingDays: number[],
  includeFuture: boolean
) => {
  const year = today.getFullYear();
  const month = today.getMonth();
  const totalDays = includeFuture
    ? new Date(year, month + 1, 0).getDate()
    : today.getDate();
  const dates: string[] = [];
  for (let day = 1; day <= totalDays; day += 1) {
    const next = new Date(year, month, day);
    dates.push(toLocalDateISO(next));
  }
  return dates.filter((day) => isWorkingDay(day, workingDays));
};

const getDateRange = (
  range: RangeKey,
  workingDays: number[],
  includeFuture: boolean
) => {
  const today = new Date();
  return range === "week"
    ? getWeekRange(today, workingDays, includeFuture)
    : getMonthRange(today, workingDays, includeFuture);
};

const combineDateAndTime = (dateISO: string, time: string) => {
  const [year, month, day] = dateISO.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, 0, 0);
};

const isLateCheckIn = (signInAt: Date | null, lateAfterTime: string, dateISO: string) => {
  if (!signInAt || !lateAfterTime || !dateISO) return false;
  const lateAfter = combineDateAndTime(dateISO, lateAfterTime);
  return signInAt.getTime() > lateAfter.getTime();
};

const isEarlyCheckout = (
  signOutAt: Date | null,
  earlyCheckoutBeforeTime: string,
  dateISO: string
) => {
  if (!signOutAt || !earlyCheckoutBeforeTime || !dateISO) return false;
  const earlyCutoff = combineDateAndTime(dateISO, earlyCheckoutBeforeTime);
  return signOutAt.getTime() < earlyCutoff.getTime();
};

const toPercent = (numerator: number, denominator: number) => {
  if (!denominator) return 0;
  return Math.round((numerator / denominator) * 1000) / 10;
};

const getMinutesLate = (signInAt: Date | null, lateAfterTime: string, dateISO: string) => {
  if (!signInAt || !lateAfterTime || !dateISO) return 0;
  const lateAfter = combineDateAndTime(dateISO, lateAfterTime);
  if (signInAt.getTime() <= lateAfter.getTime()) return 0;
  return Math.round((signInAt.getTime() - lateAfter.getTime()) / 60000);
};

const getMinutesEarly = (
  signOutAt: Date | null,
  earlyCheckoutBeforeTime: string,
  dateISO: string
) => {
  if (!signOutAt || !earlyCheckoutBeforeTime || !dateISO) return 0;
  const earlyCutoff = combineDateAndTime(dateISO, earlyCheckoutBeforeTime);
  if (signOutAt.getTime() >= earlyCutoff.getTime()) return 0;
  return Math.round((earlyCutoff.getTime() - signOutAt.getTime()) / 60000);
};

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnalytics(orgId: string, range: RangeKey, filter: FilterKey) {
    const organization = await this.prisma.organization.findUnique({
      where: { id: orgId },
      include: { staff: true }
    });
    if (!organization) {
      return {
        rangeStart: null,
        rangeEnd: null,
        rows: [],
        totals: { late: 0, early: 0, absent: 0 },
        punctualityTrends: [],
        reliability: {
          expectedDays: 0,
          averageAttendanceRate: 0,
          averagePunctualityRate: 0,
          averageLateMinutes: 0,
          averageEarlyCheckoutMinutes: 0,
          staff: []
        },
        roleInsights: [],
        geoPolicyCompliance: {
          geoFenceEnabled: false,
          geoFenceConfigured: false,
          officeRadiusMeters: null,
          attendanceEditPolicy: "any",
          analyticsIncludeFutureDays: false,
          expectedCheckIns: 0,
          actualCheckIns: 0,
          missingCheckIns: 0,
          policyBreachEvents: 0,
          complianceRate: 0
        }
      };
    }
    const workingDays = organization.workingDays ?? [1, 2, 3, 4, 5];
    const includeFuture = organization.analyticsIncludeFutureDays ?? false;
    const dateRange = getDateRange(range, workingDays, includeFuture);
    const records = dateRange.length
      ? await this.prisma.attendanceRecord.findMany({
          where: {
            organizationId: orgId,
            dateISO: { in: dateRange }
          }
        })
      : [];
    const recordMap = new Map<string, { signInAt: Date | null; signOutAt: Date | null }>();
    records.forEach((record) => {
      recordMap.set(`${record.staffId}-${record.dateISO}`, {
        signInAt: record.signInAt ?? null,
        signOutAt: record.signOutAt ?? null
      });
    });

    const dailyTrendMap = new Map<
      string,
      {
        dateISO: string;
        onTime: number;
        late: number;
        earlyCheckout: number;
        absent: number;
        avgLateMinutes: number;
        avgEarlyCheckoutMinutes: number;
      }
    >();
    dateRange.forEach((dateISO) => {
      dailyTrendMap.set(dateISO, {
        dateISO,
        onTime: 0,
        late: 0,
        earlyCheckout: 0,
        absent: 0,
        avgLateMinutes: 0,
        avgEarlyCheckoutMinutes: 0
      });
    });

    const rows = organization.staff.map((staff) => {
      let lateCount = 0;
      let earlyCount = 0;
      let absentCount = 0;
      let presentCount = 0;
      let onTimeCount = 0;
      let lateMinutesTotal = 0;
      let earlyMinutesTotal = 0;
      let lateDaysCount = 0;
      let earlyDaysCount = 0;
      let currentAttendanceStreak = 0;
      let maxAttendanceStreak = 0;
      let currentAbsenceStreak = 0;
      let maxAbsenceStreak = 0;

      dateRange.forEach((dateISO) => {
        const record = recordMap.get(`${staff.id}-${dateISO}`);
        const trend = dailyTrendMap.get(dateISO);
        if (!record?.signInAt) {
          absentCount += 1;
          currentAbsenceStreak += 1;
          currentAttendanceStreak = 0;
          if (currentAbsenceStreak > maxAbsenceStreak) {
            maxAbsenceStreak = currentAbsenceStreak;
          }
          if (trend) {
            trend.absent += 1;
          }
          return;
        }

        presentCount += 1;
        currentAttendanceStreak += 1;
        currentAbsenceStreak = 0;
        if (currentAttendanceStreak > maxAttendanceStreak) {
          maxAttendanceStreak = currentAttendanceStreak;
        }

        const wasLate = isLateCheckIn(
          record.signInAt,
          organization.lateAfterTime,
          dateISO
        );
        const lateMinutes = getMinutesLate(
          record.signInAt,
          organization.lateAfterTime,
          dateISO
        );
        if (wasLate) {
          lateCount += 1;
          lateDaysCount += 1;
          lateMinutesTotal += lateMinutes;
          if (trend) {
            trend.late += 1;
            trend.avgLateMinutes += lateMinutes;
          }
        } else {
          onTimeCount += 1;
          if (trend) {
            trend.onTime += 1;
          }
        }

        const leftEarly =
          record.signOutAt &&
          isEarlyCheckout(
            record.signOutAt,
            organization.earlyCheckoutBeforeTime,
            dateISO
          );
        if (
          record.signOutAt &&
          leftEarly
        ) {
          const earlyMinutes = getMinutesEarly(
            record.signOutAt,
            organization.earlyCheckoutBeforeTime,
            dateISO
          );
          earlyCount += 1;
          earlyDaysCount += 1;
          earlyMinutesTotal += earlyMinutes;
          if (trend) {
            trend.earlyCheckout += 1;
            trend.avgEarlyCheckoutMinutes += earlyMinutes;
          }
        }
      });

      const orderedDates = [...dateRange];
      for (let index = orderedDates.length - 1; index >= 0; index -= 1) {
        const record = recordMap.get(`${staff.id}-${orderedDates[index]}`);
        if (record?.signInAt) {
          break;
        }
        currentAttendanceStreak = 0;
      }

      return {
        staff,
        lateCount,
        earlyCount,
        absentCount,
        expectedDays: dateRange.length,
        presentCount,
        onTimeCount,
        attendanceRate: toPercent(presentCount, dateRange.length),
        punctualityRate: toPercent(onTimeCount, presentCount),
        avgLateMinutes: lateDaysCount ? Math.round(lateMinutesTotal / lateDaysCount) : 0,
        avgEarlyCheckoutMinutes: earlyDaysCount
          ? Math.round(earlyMinutesTotal / earlyDaysCount)
          : 0,
        currentAttendanceStreak,
        maxAttendanceStreak,
        maxAbsenceStreak,
        policyBreaches: lateCount + earlyCount + absentCount
      };
    });

    const filteredRows = rows.filter((row) => {
      if (filter === "late") return row.lateCount > 0;
      if (filter === "early") return row.earlyCount > 0;
      if (filter === "absent") return row.absentCount > 0;
      return true;
    });

    const totals = rows.reduce(
      (acc, row) => {
        acc.late += row.lateCount;
        acc.early += row.earlyCount;
        acc.absent += row.absentCount;
        return acc;
      },
      { late: 0, early: 0, absent: 0 }
    );

    const punctualityTrends = dateRange.map((dateISO) => {
      const trend = dailyTrendMap.get(dateISO);
      const staffCount = organization.staff.length;
      const late = trend?.late ?? 0;
      const onTime = trend?.onTime ?? 0;
      const absent = trend?.absent ?? 0;
      const earlyCheckout = trend?.earlyCheckout ?? 0;
      const avgLateMinutes = late
        ? Math.round((trend?.avgLateMinutes ?? 0) / late)
        : 0;
      const avgEarlyCheckoutMinutes = earlyCheckout
        ? Math.round((trend?.avgEarlyCheckoutMinutes ?? 0) / earlyCheckout)
        : 0;
      return {
        dateISO,
        onTime,
        late,
        earlyCheckout,
        absent,
        attendanceRate: toPercent(staffCount - absent, staffCount),
        punctualityRate: toPercent(onTime, onTime + late),
        avgLateMinutes,
        avgEarlyCheckoutMinutes
      };
    });

    const reliability = {
      expectedDays: dateRange.length,
      averageAttendanceRate: rows.length
        ? Math.round(rows.reduce((sum, row) => sum + row.attendanceRate, 0) / rows.length)
        : 0,
      averagePunctualityRate: rows.length
        ? Math.round(rows.reduce((sum, row) => sum + row.punctualityRate, 0) / rows.length)
        : 0,
      averageLateMinutes: rows.length
        ? Math.round(rows.reduce((sum, row) => sum + row.avgLateMinutes, 0) / rows.length)
        : 0,
      averageEarlyCheckoutMinutes: rows.length
        ? Math.round(
            rows.reduce((sum, row) => sum + row.avgEarlyCheckoutMinutes, 0) / rows.length
          )
        : 0,
      staff: rows
        .map((row) => ({
          staff: row.staff,
          expectedDays: row.expectedDays,
          presentDays: row.presentCount,
          attendanceRate: row.attendanceRate,
          punctualityRate: row.punctualityRate,
          maxAttendanceStreak: row.maxAttendanceStreak,
          maxAbsenceStreak: row.maxAbsenceStreak,
          avgLateMinutes: row.avgLateMinutes,
          avgEarlyCheckoutMinutes: row.avgEarlyCheckoutMinutes,
          policyBreaches: row.policyBreaches
        }))
        .sort((a, b) => b.policyBreaches - a.policyBreaches)
    };

    const roleInsights = Array.from(
      rows.reduce(
        (acc, row) => {
          const roleKey = row.staff.role || "Unassigned";
          const existing = acc.get(roleKey) ?? {
            role: roleKey,
            staffCount: 0,
            lateCount: 0,
            earlyCount: 0,
            absentCount: 0,
            expectedDays: 0,
            presentDays: 0,
            onTimeDays: 0
          };
          existing.staffCount += 1;
          existing.lateCount += row.lateCount;
          existing.earlyCount += row.earlyCount;
          existing.absentCount += row.absentCount;
          existing.expectedDays += row.expectedDays;
          existing.presentDays += row.presentCount;
          existing.onTimeDays += row.onTimeCount;
          acc.set(roleKey, existing);
          return acc;
        },
        new Map<
          string,
          {
            role: string;
            staffCount: number;
            lateCount: number;
            earlyCount: number;
            absentCount: number;
            expectedDays: number;
            presentDays: number;
            onTimeDays: number;
          }
        >()
      ).values()
    )
      .map((role) => ({
        ...role,
        attendanceRate: toPercent(role.presentDays, role.expectedDays),
        punctualityRate: toPercent(role.onTimeDays, role.presentDays),
        policyBreaches: role.lateCount + role.earlyCount + role.absentCount
      }))
      .sort((a, b) => b.policyBreaches - a.policyBreaches);

    const expectedCheckIns = organization.staff.length * dateRange.length;
    const actualCheckIns = rows.reduce((sum, row) => sum + row.presentCount, 0);
    const missingCheckIns = expectedCheckIns - actualCheckIns;
    const policyBreachEvents = totals.late + totals.early + totals.absent;
    const compliantCheckInEvents = Math.max(0, expectedCheckIns - policyBreachEvents);
    const geoPolicyCompliance = {
      geoFenceEnabled: organization.officeGeoFenceEnabled,
      geoFenceConfigured:
        organization.officeGeoFenceEnabled &&
        organization.officeLatitude !== null &&
        organization.officeLongitude !== null &&
        (organization.officeRadiusMeters ?? 0) > 0,
      officeRadiusMeters: organization.officeRadiusMeters ?? null,
      attendanceEditPolicy: organization.attendanceEditPolicy,
      analyticsIncludeFutureDays: organization.analyticsIncludeFutureDays,
      expectedCheckIns,
      actualCheckIns,
      missingCheckIns,
      policyBreachEvents,
      complianceRate: toPercent(compliantCheckInEvents, expectedCheckIns)
    };

    return {
      rangeStart: dateRange[0] ?? null,
      rangeEnd: dateRange[dateRange.length - 1] ?? null,
      rows: filteredRows,
      totals,
      punctualityTrends,
      reliability,
      roleInsights,
      geoPolicyCompliance
    };
  }
}
