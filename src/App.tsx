import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { AttendanceRecord, OrgSettings, StaffMember } from "./types";
import {
  addOrganization,
  addStaffToOrg,
  getAttendanceForDate,
  loadState,
  removeOrganization,
  saveState,
  updateOrganization,
  updateOrgSettings,
  upsertAttendance
} from "./lib/storage";
import { formatDateLong, getTodayISO } from "./lib/time";
import AttendanceTable from "./components/AttendanceTable";
import OrgSelector from "./components/OrgSelector";
import StaffOnboarding from "./components/StaffOnboarding";
import DateSelector from "./components/DateSelector";
import AdminSettings from "./components/AdminSettings";
import AdminDashboard from "./components/AdminDashboard";
import StaffDashboard from "./components/StaffDashboard";
import ConfirmModal from "./components/ConfirmModal";
import OrganizationsPage from "./components/OrganizationsPage";
import AnalyticsPage from "./components/AnalyticsPage";

const createStaffMember = (payload: Omit<StaffMember, "id">): StaffMember => {
  const id = `staff-${Math.random().toString(36).slice(2, 9)}`;
  return { id, ...payload };
};

type ViewMode = "admin" | "staff";

type PendingAction = {
  staffId: string;
  staffName: string;
  type: "sign-in" | "sign-out";
} | null;

const DEFAULT_ADMIN_EMAIL = "Akindelefelix1@gmail.com";
const AUTH_KEY = "attendance-org-auth";
const LANDING_KEY = "attendance-landing-seen";
const SESSION_KEY = "attendance-session-org";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOrganizationsPage = location.pathname === "/app/organizations";
  const isAnalyticsPage = location.pathname === "/app/analytics";
  const isDashboardPage = location.pathname === "/app";
  const [state, setState] = useState(loadState());
  const sessionOrgId = localStorage.getItem(SESSION_KEY) ?? "";
  const [selectedOrgId, setSelectedOrgId] = useState(
    sessionOrgId || state.organizations[0]?.id || ""
  );
  const [viewerEmail, setViewerEmail] = useState("");
  const [adminEmailInput, setAdminEmailInput] = useState("");
  const [showAdminGate, setShowAdminGate] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("staff");
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [newOrgName, setNewOrgName] = useState("");
  const [newOrgLocation, setNewOrgLocation] = useState("");
  const [orgNameDraft, setOrgNameDraft] = useState("");
  const [orgLocationDraft, setOrgLocationDraft] = useState("");
  const [busyAction, setBusyAction] = useState<{ id: string; label: string } | null>(
    null
  );
  const [navCompact, setNavCompact] = useState(false);
  const [showOnboardModal, setShowOnboardModal] = useState(false);

  const todayISO = getTodayISO();
  const [selectedDateISO, setSelectedDateISO] = useState(todayISO);

  const visibleOrganizations = useMemo(() => {
    if (sessionOrgId) {
      return state.organizations.filter((org) => org.id === sessionOrgId);
    }
    return state.organizations;
  }, [state.organizations, sessionOrgId]);

  const selectedOrg = useMemo(() => {
    return visibleOrganizations.find((org) => org.id === selectedOrgId) ?? null;
  }, [visibleOrganizations, selectedOrgId]);

  useEffect(() => {
    const sessionId = localStorage.getItem(SESSION_KEY);
    if (sessionId) {
      const exists = state.organizations.some((org) => org.id === sessionId);
      if (exists) {
        setSelectedOrgId(sessionId);
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, [state.organizations]);

  useEffect(() => {
    if (!selectedOrg) {
      setOrgNameDraft("");
      setOrgLocationDraft("");
      return;
    }
    setOrgNameDraft(selectedOrg.name);
    setOrgLocationDraft(selectedOrg.location);
  }, [selectedOrg]);

  useEffect(() => {
    const handleScroll = () => {
      setNavCompact(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const attendanceForDate = useMemo(() => {
    if (!selectedOrg) return [];
    return getAttendanceForDate(state, selectedOrg.id, selectedDateISO);
  }, [selectedOrg, state, selectedDateISO]);

  const commitState = (nextState: typeof state) => {
    setState(nextState);
    saveState(nextState);
  };

  const runWithBusy = (
    id: string,
    label: string,
    action: () => void,
    onDone?: () => void
  ) => {
    if (busyAction) return;
    setBusyAction({ id, label });
    try {
      action();
    } finally {
      window.setTimeout(() => {
        setBusyAction(null);
        onDone?.();
      }, 350);
    }
  };

  const handleAddOrganization = () => {
    if (sessionOrgId) return;
    if (!newOrgName || !newOrgLocation) return;
    runWithBusy("add-org", "Adding organization...", () => {
      const nextState = addOrganization(state, {
        name: newOrgName.trim(),
        location: newOrgLocation.trim()
      });
      commitState(nextState);
      const lastOrg = nextState.organizations[nextState.organizations.length - 1];
      if (lastOrg) {
        setSelectedOrgId(lastOrg.id);
      }
      setNewOrgName("");
      setNewOrgLocation("");
    });
  };

  const handleUpdateOrganization = () => {
    if (!selectedOrg) return;
    runWithBusy("update-org", "Saving organization...", () => {
      const nextState = updateOrganization(state, selectedOrg.id, {
        name: orgNameDraft.trim(),
        location: orgLocationDraft.trim()
      });
      commitState(nextState);
    });
  };

  const handleDeleteOrganization = () => {
    if (!selectedOrg) return;
    if (!window.confirm(`Remove ${selectedOrg.name}? This cannot be undone.`)) {
      return;
    }
    runWithBusy("remove-org", "Removing organization...", () => {
      const nextState = removeOrganization(state, selectedOrg.id);
      commitState(nextState);
      setSelectedOrgId(nextState.organizations[0]?.id ?? "");
    });
  };

  const handleAddStaff = (payload: Omit<StaffMember, "id">) => {
    if (!selectedOrg) return;
    runWithBusy("add-staff", "Adding staff member...", () => {
      const staff = createStaffMember(payload);
      const nextState = addStaffToOrg(state, selectedOrg.id, staff);
      commitState(nextState);
    });
  };

  const handleUpdateSettings = (settings: OrgSettings) => {
    if (!selectedOrg) return;
    runWithBusy("update-settings", "Saving settings...", () => {
      const nextState = updateOrgSettings(state, selectedOrg.id, settings);
      commitState(nextState);
    });
  };

  const performSignIn = (staffId: string) => {
    if (!selectedOrg) return;
    const existing = attendanceForDate.find((record) => record.staffId === staffId);
    const signInAt = existing?.signInAt ?? new Date().toISOString();
    const record: AttendanceRecord = {
      staffId,
      dateISO: selectedDateISO,
      signInAt,
      signOutAt: existing?.signOutAt
    };
    const nextState = upsertAttendance(state, selectedOrg.id, record);
    commitState(nextState);
  };

  const performSignOut = (staffId: string) => {
    if (!selectedOrg) return;
    const existing = attendanceForDate.find((record) => record.staffId === staffId);
    if (!existing?.signInAt) return;
    const record: AttendanceRecord = {
      staffId,
      dateISO: selectedDateISO,
      signInAt: existing.signInAt,
      signOutAt: new Date().toISOString()
    };
    const nextState = upsertAttendance(state, selectedOrg.id, record);
    commitState(nextState);
  };

  const requestAction = (staffId: string, type: "sign-in" | "sign-out") => {
    if (!selectedOrg) return;
    const staff = selectedOrg.staff.find((person) => person.id === staffId);
    if (!staff) return;
    setPendingAction({ staffId, staffName: staff.fullName, type });
  };

  const handleConfirmAction = () => {
    if (!pendingAction) return;
    const actionId =
      pendingAction.type === "sign-in"
        ? `sign-in-${pendingAction.staffId}`
        : `sign-out-${pendingAction.staffId}`;
    const actionLabel =
      pendingAction.type === "sign-in" ? "Signing in..." : "Signing out...";
    runWithBusy(actionId, actionLabel, () => {
      if (pendingAction.type === "sign-in") {
        performSignIn(pendingAction.staffId);
      } else {
        performSignOut(pendingAction.staffId);
      }
    }, () => setPendingAction(null));
  };

  const canEditToday = selectedDateISO === todayISO;
  const adminEmail = (() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return DEFAULT_ADMIN_EMAIL;
      const records = JSON.parse(raw) as Array<{ orgId: string; email: string }>;
      const record = records.find((item) => item.orgId === sessionOrgId);
      return record?.email ?? DEFAULT_ADMIN_EMAIL;
    } catch {
      return DEFAULT_ADMIN_EMAIL;
    }
  })();
  const isAdmin = viewerEmail.trim().toLowerCase() === adminEmail.toLowerCase();
  const effectiveViewMode: ViewMode = isAdmin ? viewMode : "staff";
  const isAdminInputMatch =
    adminEmailInput.trim().toLowerCase() === adminEmail.toLowerCase();

  const handleSwitchToAdmin = () => {
    setShowAdminGate(true);
  };

  const handleAdminAccess = () => {
    const normalized = adminEmailInput.trim().toLowerCase();
    if (normalized === adminEmail.toLowerCase()) {
      setViewerEmail(adminEmailInput.trim());
      setViewMode("admin");
      setShowAdminGate(false);
    }
  };

  const handleSwitchToStaff = () => {
    setViewMode("staff");
    setShowAdminGate(false);
  };

  const handleCloseAdminGate = () => {
    setShowAdminGate(false);
    setAdminEmailInput("");
  };

  const handleOpenOnboard = () => setShowOnboardModal(true);
  const handleCloseOnboard = () => setShowOnboardModal(false);

  const handleBackToLanding = () => {
    localStorage.removeItem(LANDING_KEY);
    navigate("/");
  };

  const handleAddOrgFromPage = (name: string, location: string) => {
    if (sessionOrgId) return;
    runWithBusy("org-add", "Adding organization...", () => {
      const nextState = addOrganization(state, { name, location });
      commitState(nextState);
    });
  };

  const handleUpdateOrgFromPage = (orgId: string, name: string, location: string) => {
    runWithBusy(`org-save-${orgId}`, "Saving organization...", () => {
      const nextState = updateOrganization(state, orgId, { name, location });
      commitState(nextState);
    });
  };

  const handleRemoveOrgFromPage = (orgId: string) => {
    if (sessionOrgId && orgId !== sessionOrgId) return;
    const org = state.organizations.find((item) => item.id === orgId);
    if (org && !window.confirm(`Remove ${org.name}? This cannot be undone.`)) {
      return;
    }
    runWithBusy(`org-remove-${orgId}`, "Removing organization...", () => {
      const nextState = removeOrganization(state, orgId);
      commitState(nextState);
      if (selectedOrgId === orgId) {
        setSelectedOrgId(nextState.organizations[0]?.id ?? "");
      }
    });
  };

  const modalTitle = pendingAction
    ? pendingAction.type === "sign-in"
      ? `Confirm sign in`
      : `Confirm sign out`
    : "";
  const modalDescription = pendingAction
    ? pendingAction.type === "sign-in"
      ? `Sign in ${pendingAction.staffName} for today?`
      : `Sign out ${pendingAction.staffName} for today?`
    : "";

  const isBusy = Boolean(busyAction);

  return (
    <div className="app-shell with-fixed-nav">
      {busyAction ? (
        <div className="activity-bar" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          <span>{busyAction.label}</span>
        </div>
      ) : null}
      {isDashboardPage ? (
        <header className="hero">
          <div>
            <p className="eyebrow">Staff Attendance</p>
            <h1>Morning sign-in, evening sign-out for every organization.</h1>
            <p className="lede">
              Track daily attendance across multiple teams with a clear view of who is
              clocked in, who is done, and who still needs a reminder.
            </p>
          </div>
          <div className="hero-card">
            <p className="hero-label">Today</p>
            <p className="hero-date">{formatDateLong(todayISO)}</p>
            <div className="hero-metric">
              <span>Organizations</span>
              <strong>{visibleOrganizations.length}</strong>
            </div>
            <div className="hero-metric">
              <span>Staff on file</span>
              <strong>
                {visibleOrganizations.reduce((sum, org) => sum + org.staff.length, 0)}
              </strong>
            </div>
          </div>
        </header>
      ) : null}

      <div className={`topbar admin-nav ${navCompact ? "compact" : ""}`}>
        <div className="nav-brand">
          <strong>{effectiveViewMode === "admin" ? "Admin view" : "Staff view"}</strong>
          <span className="nav-subtitle">
            {effectiveViewMode === "admin"
              ? "Settings and onboarding"
              : "Read-only for settings"}
          </span>
        </div>
        <div className="topbar-actions nav-links">
          <button
            className={`nav-pill ${isDashboardPage ? "active" : ""}`}
            type="button"
            onClick={() => navigate("/app")}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M3 10.5L12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-5.5v-6h-4v6h-5.5A1.5 1.5 0 0 1 3 19.5v-9Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Dashboard
          </button>
          <button className="nav-pill" type="button" onClick={handleBackToLanding}>
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M5 12h14m-8-6 6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Back to landing
          </button>
          {effectiveViewMode === "admin" ? (
            <button className="nav-pill" type="button" onClick={handleSwitchToStaff}>
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M4 7h9m-9 5h12m-12 5h8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Switch to staff
            </button>
          ) : (
            <button className="nav-pill accent" type="button" onClick={handleSwitchToAdmin}>
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-6.5 15a6.5 6.5 0 0 1 13 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Switch to admin
            </button>
          )}
          {isAdmin ? (
            <button
              className={`nav-pill ${isOrganizationsPage ? "active" : ""}`}
              type="button"
              onClick={() =>
                navigate(isOrganizationsPage ? "/app" : "/app/organizations")
              }
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M4 5h16v6H4V5Zm0 8h10v6H4v-6Zm12 0h4v6h-4v-6Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {isOrganizationsPage ? "Back to dashboard" : "Organizations"}
            </button>
          ) : null}
          {isAdmin ? (
            <button
              className={`nav-pill ${isAnalyticsPage ? "active" : ""}`}
              type="button"
              onClick={() => navigate(isAnalyticsPage ? "/app" : "/app/analytics")}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M5 19V9m5 10V5m5 14v-6m5 6V8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {isAnalyticsPage ? "Back to dashboard" : "Analytics"}
            </button>
          ) : null}
        </div>
      </div>

      {isOrganizationsPage && isAdmin ? (
        <main className="layout full">
          <OrganizationsPage
            organizations={visibleOrganizations}
            onAdd={handleAddOrgFromPage}
            onUpdate={handleUpdateOrgFromPage}
            onRemove={handleRemoveOrgFromPage}
            isBusy={isBusy}
            busyActionId={busyAction?.id ?? null}
          />
        </main>
      ) : isAnalyticsPage && isAdmin ? (
        <main className="layout full">
          <AnalyticsPage
            organization={selectedOrg}
            attendanceRecords={
              selectedOrg ? state.attendanceByOrg[selectedOrg.id] ?? [] : []
            }
          />
        </main>
      ) : (
        <main className="layout full">
          {effectiveViewMode === "admin" ? (
            <>
              <AdminDashboard organizations={visibleOrganizations} />
              <div className="admin-layout">
                <section className="panel admin-column">
                  <div className="cta-card cta-top">
                    <div>
                      <h3>Onboard staff</h3>
                      <p className="muted">
                        Add new team members and assign roles in seconds.
                      </p>
                    </div>
                    <button
                      className="btn solid"
                      type="button"
                      onClick={handleOpenOnboard}
                      disabled={!selectedOrg || isBusy}
                    >
                      Onboard staff
                    </button>
                  </div>

                  <OrgSelector
                    organizations={visibleOrganizations}
                    selectedOrgId={selectedOrgId}
                    onSelect={setSelectedOrgId}
                  />

                  <div className="org-manager">
                    <div className="panel-header">
                      <h3>Organization settings</h3>
                      <p className="muted">Edit your organization details.</p>
                    </div>
                    <div className="org-form">
                      <label>
                        Organization name
                        <input
                          type="text"
                          value={orgNameDraft}
                          onChange={(event) => setOrgNameDraft(event.target.value)}
                          placeholder="Organization name"
                          disabled={!selectedOrg}
                        />
                      </label>
                      <label>
                        Location
                        <input
                          type="text"
                          value={orgLocationDraft}
                          onChange={(event) => setOrgLocationDraft(event.target.value)}
                          placeholder="Location"
                          disabled={!selectedOrg}
                        />
                      </label>
                      <div className="org-actions">
                        <button
                          className="btn solid"
                          type="button"
                          onClick={handleUpdateOrganization}
                          disabled={!selectedOrg || isBusy}
                        >
                          {busyAction?.id === "update-org"
                            ? "Saving..."
                            : "Save changes"}
                        </button>
                        {!sessionOrgId ? (
                          <button
                            className="btn ghost danger"
                            type="button"
                            onClick={handleDeleteOrganization}
                            disabled={!selectedOrg || isBusy}
                          >
                            {busyAction?.id === "remove-org"
                              ? "Removing..."
                              : "Remove organization"}
                          </button>
                        ) : null}
                      </div>
                    </div>
                    {!sessionOrgId ? (
                      <>
                        <div className="org-divider" />
                        <div className="org-form">
                          <label>
                            New organization name
                            <input
                              type="text"
                              value={newOrgName}
                              onChange={(event) => setNewOrgName(event.target.value)}
                              placeholder="New organization"
                              disabled={isBusy}
                            />
                          </label>
                          <label>
                            New organization location
                            <input
                              type="text"
                              value={newOrgLocation}
                              onChange={(event) => setNewOrgLocation(event.target.value)}
                              placeholder="City"
                              disabled={isBusy}
                            />
                          </label>
                          <button
                            className="btn solid"
                            type="button"
                            onClick={handleAddOrganization}
                            disabled={isBusy}
                          >
                            {busyAction?.id === "add-org"
                              ? "Adding..."
                              : "Add organization"}
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="muted">This account manages a single organization.</p>
                    )}
                  </div>

                  {selectedOrg ? (
                    <div className="org-summary">
                      <h2>{selectedOrg.name}</h2>
                      <p>{selectedOrg.location}</p>
                      <div className="pill-row">
                        <span className="pill">{selectedOrg.staff.length} staff</span>
                        <span className="pill">{attendanceForDate.length} checked in</span>
                      </div>
                    </div>
                  ) : (
                    <div className="empty-state">
                      <h3>No organization yet</h3>
                      <p className="muted">
                        Create your organization to start tracking attendance.
                      </p>
                      <button
                        className="btn solid"
                        type="button"
                        onClick={() => navigate("/signup")}
                      >
                        Create organization
                      </button>
                    </div>
                  )}

                  {selectedOrg ? (
                    <AdminSettings
                      settings={selectedOrg.settings}
                      onUpdate={handleUpdateSettings}
                      isBusy={isBusy}
                    />
                  ) : null}

                </section>

                <section className="panel wide admin-column">
                  <div className="panel-header header-row">
                    <div>
                      <h2>Attendance</h2>
                      <p className="muted">
                        {canEditToday
                          ? "Sign in or sign out as staff arrive and leave."
                          : "Viewing historical attendance. Changes are disabled."}
                      </p>
                    </div>
                    <DateSelector
                      selectedDate={selectedDateISO}
                      onChange={setSelectedDateISO}
                    />
                  </div>
                  {selectedOrg ? (
                    <AttendanceTable
                      staff={selectedOrg.staff}
                      attendance={attendanceForDate}
                      settings={selectedOrg.settings}
                      onSignIn={(staffId) => requestAction(staffId, "sign-in")}
                      onSignOut={(staffId) => requestAction(staffId, "sign-out")}
                      canEdit={canEditToday}
                      isBusy={isBusy}
                    />
                  ) : (
                    <div className="empty-state">
                      <h3>No organization selected</h3>
                      <p>Select an organization to manage attendance.</p>
                    </div>
                  )}
                </section>
              </div>
            </>
          ) : (
            <>
              <StaffDashboard
                organizations={visibleOrganizations}
                selectedOrgId={selectedOrgId}
                attendanceForDate={attendanceForDate}
              />
              <section className="panel">
                <OrgSelector
                  organizations={visibleOrganizations}
                  selectedOrgId={selectedOrgId}
                  onSelect={setSelectedOrgId}
                />
                {selectedOrg ? (
                  <div className="org-summary">
                    <h2>{selectedOrg.name}</h2>
                    <p>{selectedOrg.location}</p>
                    <div className="pill-row">
                      <span className="pill">{selectedOrg.staff.length} staff</span>
                      <span className="pill">{attendanceForDate.length} checked in</span>
                    </div>
                  </div>
                ) : (
                  <div className="empty-state">
                    <h3>No organization yet</h3>
                    <p className="muted">
                      Create your organization to start tracking attendance.
                    </p>
                    <button
                      className="btn solid"
                      type="button"
                      onClick={() => navigate("/signup")}
                    >
                      Create organization
                    </button>
                  </div>
                )}
              </section>

              <section className="panel wide">
                <div className="panel-header header-row">
                  <div>
                    <h2>Attendance</h2>
                    <p className="muted">
                      {canEditToday
                        ? "Sign in or sign out as staff arrive and leave."
                        : "Viewing historical attendance. Changes are disabled."}
                    </p>
                  </div>
                  <DateSelector
                    selectedDate={selectedDateISO}
                    onChange={setSelectedDateISO}
                  />
                </div>
                {selectedOrg ? (
                  <AttendanceTable
                    staff={selectedOrg.staff}
                    attendance={attendanceForDate}
                    settings={selectedOrg.settings}
                    onSignIn={(staffId) => requestAction(staffId, "sign-in")}
                    onSignOut={(staffId) => requestAction(staffId, "sign-out")}
                    canEdit={canEditToday}
                    isBusy={isBusy}
                  />
                ) : (
                  <div className="empty-state">
                    <h3>No organization selected</h3>
                    <p>Select an organization to manage attendance.</p>
                  </div>
                )}
              </section>
            </>
          )}
        </main>
      )}

      <ConfirmModal
        isOpen={Boolean(pendingAction)}
        title={modalTitle}
        description={modalDescription}
        confirmLabel={pendingAction?.type === "sign-out" ? "Sign out" : "Sign in"}
        isLoading={Boolean(busyAction?.id?.startsWith("sign-"))}
        loadingLabel={busyAction?.label ?? "Working..."}
        onConfirm={handleConfirmAction}
        onCancel={() => setPendingAction(null)}
      />

      {showAdminGate ? (
        <div className="modal-backdrop" role="presentation">
          <div className="modal" role="dialog" aria-modal="true" aria-label="Admin access">
            <div className="modal-header">
              <h3>Admin access</h3>
            </div>
            <p className="muted">Enter the admin email to unlock settings.</p>
            <div className="gate-row">
              <input
                type="email"
                value={adminEmailInput}
                onChange={(event) => setAdminEmailInput(event.target.value)}
                placeholder="Admin email"
              />
              <button className="btn solid" type="button" onClick={handleAdminAccess}>
                Continue
              </button>
            </div>
            {adminEmailInput ? (
              <p className="muted">
                {isAdminInputMatch
                  ? "Email recognized. Continue to unlock admin view."
                  : "Only the admin email can unlock this view."}
              </p>
            ) : null}
            <div className="modal-actions">
              <button className="btn ghost" type="button" onClick={handleCloseAdminGate}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showOnboardModal ? (
        <div className="modal-backdrop" role="presentation">
          <div className="modal modal-wide" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h3>Onboard staff</h3>
            </div>
            <StaffOnboarding
              onAddStaff={handleAddStaff}
              roles={selectedOrg?.settings.roles ?? []}
              disabled={!selectedOrg}
              isLoading={busyAction?.id === "add-staff"}
            />
            <div className="modal-actions">
              <button className="btn ghost" type="button" onClick={handleCloseOnboard}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
