import { useMemo, useState } from "react";
import type { AttendanceRecord, Organization, StaffMember } from "../types";
import { formatDateLong, getTodayISO, isEarlyCheckout, isLateCheckIn } from "../lib/time";

type Props = {
  organization: Organization | null;
  attendanceRecords: AttendanceRecord[];
};

type RangeKey = "week" | "month";
type FilterKey = "all" | "late" | "early" | "absent";

const getWeekStart = (date: Date) => {
  const day = date.getDay();
  const diff = (day + 6) % 7; // Monday start
  const start = new Date(date);
  start.setDate(date.getDate() - diff);
  start.setHours(0, 0, 0, 0);
  return start;
};

const getWeekRange = (today: Date, workingDays: number[], includeFuture: boolean) => {
  const start = getWeekStart(today);
  const dates: string[] = [];
  for (let offset = 0; offset < 7; offset += 1) {
    const next = new Date(start);
    next.setDate(start.getDate() + offset);
    if (!includeFuture && next > today) break;
    dates.push(next.toISOString().slice(0, 10));
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
  const start = new Date(year, month, 1);
  const totalDays = includeFuture
    ? new Date(year, month + 1, 0).getDate()
    : today.getDate();
  const dates: string[] = [];
  for (let day = 1; day <= totalDays; day += 1) {
    const next = new Date(year, month, day);
    dates.push(next.toISOString().slice(0, 10));
  }
  return dates.filter((day) => isWorkingDay(day, workingDays));
};

const getDateRange = (
  range: RangeKey,
  workingDays: number[],
  includeFuture: boolean
) => {
  const today = new Date(getTodayISO());
  return range === "week"
    ? getWeekRange(today, workingDays, includeFuture)
    : getMonthRange(today, workingDays, includeFuture);
};

const getRecordMap = (records: AttendanceRecord[]) => {
  const map = new Map<string, AttendanceRecord>();
  records.forEach((record) => {
    map.set(`${record.staffId}-${record.dateISO}`, record);
  });
  return map;
};

const isWorkingDay = (dateISO: string, workingDays: number[]) => {
  const day = new Date(dateISO).getDay();
  return workingDays.includes(day);
};

const downloadCsv = (filename: string, content: string) => {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const AnalyticsPage = ({ organization, attendanceRecords }: Props) => {
  const [range, setRange] = useState<RangeKey>("week");
  const [filter, setFilter] = useState<FilterKey>("all");
  const workingDays = organization?.settings.workingDays ?? [1, 2, 3, 4, 5];
  const includeFuture = organization?.settings.analyticsIncludeFutureDays ?? false;
  const dateRange = useMemo(
    () => getDateRange(range, workingDays, includeFuture),
    [range, workingDays, includeFuture]
  );
  const recordMap = useMemo(() => getRecordMap(attendanceRecords), [attendanceRecords]);
  const sortedRange = useMemo(() => [...dateRange].sort(), [dateRange]);

  const analytics = useMemo(() => {
    if (!organization) return [];
    return organization.staff.map((staff) => {
      let lateCount = 0;
      let earlyCount = 0;
      let absentCount = 0;
      sortedRange.forEach((dateISO) => {
        const record = recordMap.get(`${staff.id}-${dateISO}`);
        if (!record?.signInAt) {
          absentCount += 1;
          return;
        }
        if (isLateCheckIn(record.signInAt, organization.settings.lateAfterTime, dateISO)) {
          lateCount += 1;
        }
        if (
          record.signOutAt &&
          isEarlyCheckout(
            record.signOutAt,
            organization.settings.earlyCheckoutBeforeTime,
            dateISO
          )
        ) {
          earlyCount += 1;
        }
      });
      return { staff, lateCount, earlyCount, absentCount };
    });
  }, [organization, sortedRange, recordMap]);

  const handleExportCsv = () => {
    if (!organization || analytics.length === 0) return;
    const headers = ["Staff Name", "Email", "Role", "Late", "Early", "Absent"];
    const rows = analytics.map((row) => [
      row.staff.fullName,
      row.staff.email,
      row.staff.role,
      row.lateCount,
      row.earlyCount,
      row.absentCount
    ]);
    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
    const startLabel = sortedRange[0] ?? getTodayISO();
    const endLabel = sortedRange[sortedRange.length - 1] ?? getTodayISO();
    const filename = `${organization.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-analytics-${startLabel}-to-${endLabel}.csv`;
    downloadCsv(filename, csv);
  };

  const filteredAnalytics = useMemo(() => {
    switch (filter) {
      case "late":
        return analytics.filter((row) => row.lateCount > 0);
      case "early":
        return analytics.filter((row) => row.earlyCount > 0);
      case "absent":
        return analytics.filter((row) => row.absentCount > 0);
      default:
        return analytics;
    }
  }, [analytics, filter]);

  const totals = useMemo(() => {
    return analytics.reduce(
      (acc, row) => {
        acc.late += row.lateCount;
        acc.early += row.earlyCount;
        acc.absent += row.absentCount;
        return acc;
      },
      { late: 0, early: 0, absent: 0 }
    );
  }, [analytics]);
  const rangeLabel = sortedRange.length
    ? `Highlights for ${formatDateLong(sortedRange[0])} to ${formatDateLong(
        sortedRange[sortedRange.length - 1]
      )}.`
    : "No working days available for the selected range.";

  if (!organization) {
    return (
      <section className="panel analytics-page">
        <div className="panel-header">
          <h2>Analytics</h2>
          <p className="muted">Select an organization to view analytics.</p>
        </div>
      </section>
    );
  }

  if (organization.staff.length === 0) {
    return (
      <section className="panel analytics-page">
        <div className="panel-header">
          <h2>Analytics</h2>
          <p className="muted">No staff yet. Add team members to see analytics.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="panel analytics-page">
      <div className="analytics-hero">
        <div>
          <h2>{organization.name} analytics</h2>
          <p className="muted">{rangeLabel}</p>
        </div>
        <div className="analytics-range">
          <button
            className={`btn ${range === "week" ? "solid" : "ghost"}`}
            type="button"
            onClick={() => setRange("week")}
          >
            This week
          </button>
          <button
            className={`btn ${range === "month" ? "solid" : "ghost"}`}
            type="button"
            onClick={() => setRange("month")}
          >
            This month
          </button>
          <button className="btn ghost" type="button" onClick={handleExportCsv}>
            Export CSV
          </button>
        </div>
      </div>

      <div className="analytics-stats">
        <div className="stat-card">
          <span className="stat-label">Late arrivals</span>
          <strong className="stat-value">{totals.late}</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">Early checkouts</span>
          <strong className="stat-value">{totals.early}</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">Absences</span>
          <strong className="stat-value">{totals.absent}</strong>
        </div>
      </div>

      <div className="analytics-filters">
        <button
          className={`filter-pill ${filter === "all" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("all")}
        >
          All staff
        </button>
        <button
          className={`filter-pill ${filter === "late" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("late")}
        >
          Late
        </button>
        <button
          className={`filter-pill ${filter === "early" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("early")}
        >
          Left early
        </button>
        <button
          className={`filter-pill ${filter === "absent" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("absent")}
        >
          Absent
        </button>
      </div>

      <div className="analytics-table">
        <div className="analytics-head">
          <span>Staff</span>
          <span>Role</span>
          <span>Late</span>
          <span>Early</span>
          <span>Absent</span>
        </div>
        {filteredAnalytics.length === 0 ? (
          <div className="empty-state">
            <h3>No results</h3>
            <p className="muted">No staff match this filter for the selected range.</p>
          </div>
        ) : (
          filteredAnalytics.map((row) => (
            <div className="analytics-row" key={row.staff.id}>
              <div className="cell staff">
                <div className="staff-cell">
                  <span className="avatar">{row.staff.fullName[0]}</span>
                  <div>
                    <strong>{row.staff.fullName}</strong>
                    <span className="muted">{row.staff.email}</span>
                  </div>
                </div>
              </div>
              <div className="cell" data-label="Role">
                {row.staff.role}
              </div>
              <div className="cell" data-label="Late">
                <span className="metric-pill late">{row.lateCount}</span>
              </div>
              <div className="cell" data-label="Early">
                <span className="metric-pill early">{row.earlyCount}</span>
              </div>
              <div className="cell" data-label="Absent">
                <span className="metric-pill absent">{row.absentCount}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AnalyticsPage;
