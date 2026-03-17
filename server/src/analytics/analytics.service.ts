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
        totals: { late: 0, early: 0, absent: 0 }
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

    const rows = organization.staff.map((staff) => {
      let lateCount = 0;
      let earlyCount = 0;
      let absentCount = 0;
      dateRange.forEach((dateISO) => {
        const record = recordMap.get(`${staff.id}-${dateISO}`);
        if (!record?.signInAt) {
          absentCount += 1;
          return;
        }
        if (isLateCheckIn(record.signInAt, organization.lateAfterTime, dateISO)) {
          lateCount += 1;
        }
        if (
          record.signOutAt &&
          isEarlyCheckout(
            record.signOutAt,
            organization.earlyCheckoutBeforeTime,
            dateISO
          )
        ) {
          earlyCount += 1;
        }
      });
      return {
        staff,
        lateCount,
        earlyCount,
        absentCount
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

    return {
      rangeStart: dateRange[0] ?? null,
      rangeEnd: dateRange[dateRange.length - 1] ?? null,
      rows: filteredRows,
      totals
    };
  }
}
