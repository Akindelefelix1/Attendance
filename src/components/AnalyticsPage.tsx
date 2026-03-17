import { useEffect, useState } from "react";
import type { Organization, StaffMember } from "../types";
import { formatDateLong } from "../lib/time";
import { getAnalytics } from "../lib/api";

type Props = {
  organization: Organization | null;
};

type RangeKey = "week" | "month";
type FilterKey = "all" | "late" | "early" | "absent";

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

const AnalyticsPage = ({ organization }: Props) => {
  const [range, setRange] = useState<RangeKey>("week");
  const [filter, setFilter] = useState<FilterKey>("all");
  const [rows, setRows] = useState<
    Array<{ staff: StaffMember; lateCount: number; earlyCount: number; absentCount: number }>
  >([]);
  const [totals, setTotals] = useState({ late: 0, early: 0, absent: 0 });
  const [rangeStart, setRangeStart] = useState<string | null>(null);
  const [rangeEnd, setRangeEnd] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!organization) return;
    const load = async () => {
      setIsLoading(true);
      try {
        const result = await getAnalytics({
          orgId: organization.id,
          range,
          filter
        });
        setRows(result.rows);
        setTotals(result.totals);
        setRangeStart(result.rangeStart);
        setRangeEnd(result.rangeEnd);
      } catch {
        setRows([]);
        setTotals({ late: 0, early: 0, absent: 0 });
        setRangeStart(null);
        setRangeEnd(null);
      } finally {
        setIsLoading(false);
      }
    };
    void load();
  }, [organization, range, filter]);

  const handleExportCsv = () => {
    if (!organization || rows.length === 0) return;
    const headers = ["Staff Name", "Email", "Role", "Late", "Early", "Absent"];
    const csvRows = rows.map((row) => [
      row.staff.fullName,
      row.staff.email,
      row.staff.role,
      row.lateCount,
      row.earlyCount,
      row.absentCount
    ]);
    const csv = [headers, ...csvRows]
      .map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
    const startLabel = rangeStart ?? "range";
    const endLabel = rangeEnd ?? "range";
    const filename = `${organization.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-analytics-${startLabel}-to-${endLabel}.csv`;
    downloadCsv(filename, csv);
  };

  const rangeLabel =
    rangeStart && rangeEnd
      ? `Highlights for ${formatDateLong(rangeStart)} to ${formatDateLong(rangeEnd)}.`
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
        {isLoading ? (
          <div className="empty-state">
            <h3>Loading analytics</h3>
            <p className="muted">Fetching latest attendance highlights.</p>
          </div>
        ) : rows.length === 0 ? (
          <div className="empty-state">
            <h3>No results</h3>
            <p className="muted">No staff match this filter for the selected range.</p>
          </div>
        ) : (
          rows.map((row) => (
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
