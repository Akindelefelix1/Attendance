import { useState } from "react";
import type { OrgSettings } from "../types";

type Props = {
  settings: OrgSettings;
  onUpdate: (next: OrgSettings) => void;
  disabled?: boolean;
  isBusy?: boolean;
};

const AdminSettings = ({
  settings,
  onUpdate,
  disabled = false,
  isBusy = false
}: Props) => {
  const [roleInput, setRoleInput] = useState("");
  const workingDays = settings.workingDays ?? [1, 2, 3, 4, 5];

  const toggleWorkingDay = (day: number) => {
    const next = workingDays.includes(day)
      ? workingDays.filter((value) => value !== day)
      : [...workingDays, day];
    onUpdate({ ...settings, workingDays: next });
  };

  const handleAddRole = () => {
    const trimmed = roleInput.trim();
    if (!trimmed) return;
    if (settings.roles.some((role) => role.toLowerCase() === trimmed.toLowerCase())) {
      setRoleInput("");
      return;
    }
    onUpdate({ ...settings, roles: [...settings.roles, trimmed] });
    setRoleInput("");
  };

  const handleRemoveRole = (roleToRemove: string) => {
    onUpdate({
      ...settings,
      roles: settings.roles.filter((role) => role !== roleToRemove)
    });
  };

  return (
    <section className="admin-settings">
      <div className="panel-header">
        <h3>Attendance rules</h3>
        <p className="muted">Late and early checkout thresholds are set here.</p>
      </div>
      <label>
        Late if check-in after
        <input
          type="time"
          value={settings.lateAfterTime}
          onChange={(event) =>
            onUpdate({ ...settings, lateAfterTime: event.target.value })
          }
          disabled={disabled || isBusy}
        />
      </label>
      <label>
        Early if check-out before
        <input
          type="time"
          value={settings.earlyCheckoutBeforeTime}
          onChange={(event) =>
            onUpdate({ ...settings, earlyCheckoutBeforeTime: event.target.value })
          }
          disabled={disabled || isBusy}
        />
      </label>

      <div className="role-settings">
        <div className="panel-header">
          <h3>Working days</h3>
          <p className="muted">Choose which days count toward attendance analytics.</p>
        </div>
        <div className="workdays-grid">
          {[
            { label: "Mon", value: 1 },
            { label: "Tue", value: 2 },
            { label: "Wed", value: 3 },
            { label: "Thu", value: 4 },
            { label: "Fri", value: 5 },
            { label: "Sat", value: 6 },
            { label: "Sun", value: 0 }
          ].map((day) => (
            <label className="workday-chip" key={day.value}>
              <input
                type="checkbox"
                checked={workingDays.includes(day.value)}
                onChange={() => toggleWorkingDay(day.value)}
                disabled={disabled || isBusy}
              />
              <span>{day.label}</span>
            </label>
          ))}
        </div>
        <label className="toggle-pill">
          <input
            type="checkbox"
            checked={settings.analyticsIncludeFutureDays}
            onChange={(event) =>
              onUpdate({
                ...settings,
                analyticsIncludeFutureDays: event.target.checked
              })
            }
            disabled={disabled || isBusy}
          />
          <span>Include future working days in analytics</span>
        </label>
      </div>

      <div className="role-settings">
        <div className="panel-header">
          <h3>Roles</h3>
          <p className="muted">Create organization roles used during onboarding.</p>
        </div>
        <div className="role-input">
          <input
            type="text"
            value={roleInput}
            onChange={(event) => setRoleInput(event.target.value)}
            placeholder="Add a new role"
            disabled={disabled || isBusy}
          />
          <button
            className="btn solid"
            type="button"
            onClick={handleAddRole}
            disabled={disabled || isBusy}
          >
            {isBusy ? "Saving..." : "Add role"}
          </button>
        </div>
        <div className="role-list">
          {settings.roles.map((role) => (
            <div className="role-chip" key={role}>
              <span>{role}</span>
              <button
                type="button"
                onClick={() => handleRemoveRole(role)}
                disabled={disabled || isBusy}
              >
                Remove
              </button>
            </div>
          ))}
          {settings.roles.length === 0 ? (
            <p className="muted">No roles yet. Add the first role above.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default AdminSettings;
