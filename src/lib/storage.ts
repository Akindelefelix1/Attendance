import type { AttendanceRecord, OrgSettings, Organization, StaffMember } from "../types";

const STORAGE_KEY = "attendance-app-state";

const defaultSettings: OrgSettings = {
  lateAfterTime: "09:00",
  earlyCheckoutBeforeTime: "17:00",
  roles: [],
  workingDays: [1, 2, 3, 4, 5],
  analyticsIncludeFutureDays: false
};

type PersistedState = {
  organizations: Organization[];
  attendanceByOrg: Record<string, AttendanceRecord[]>;
};

const normalizeOrganizations = (organizations: Organization[]): Organization[] => {
  return organizations.map((org) => ({
    ...org,
    settings: {
      lateAfterTime: org.settings?.lateAfterTime ?? defaultSettings.lateAfterTime,
      earlyCheckoutBeforeTime:
        org.settings?.earlyCheckoutBeforeTime ?? defaultSettings.earlyCheckoutBeforeTime,
      roles: org.settings?.roles ?? defaultSettings.roles,
      workingDays: org.settings?.workingDays ?? defaultSettings.workingDays,
      analyticsIncludeFutureDays:
        org.settings?.analyticsIncludeFutureDays ??
        defaultSettings.analyticsIncludeFutureDays
    }
  }));
};

const defaultState: PersistedState = {
  organizations: [],
  attendanceByOrg: {}
};

export const loadState = (): PersistedState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultState;
    }
    const parsed = JSON.parse(raw) as PersistedState;
    return {
      organizations: normalizeOrganizations(
        parsed.organizations ?? defaultState.organizations
      ),
      attendanceByOrg: parsed.attendanceByOrg ?? {}
    };
  } catch {
    return defaultState;
  }
};

export const saveState = (state: PersistedState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const addStaffToOrg = (
  state: PersistedState,
  orgId: string,
  staff: StaffMember
) => {
  const organizations = state.organizations.map((org) =>
    org.id === orgId ? { ...org, staff: [...org.staff, staff] } : org
  );
  return { ...state, organizations };
};

export const addOrganization = (
  state: PersistedState,
  org: Omit<Organization, "id" | "settings" | "staff"> & {
    settings?: OrgSettings;
    staff?: StaffMember[];
  }
) => {
  const newOrg: Organization = {
    id: `org-${Math.random().toString(36).slice(2, 9)}`,
    name: org.name,
    location: org.location,
    staff: org.staff ?? [],
    settings: {
      lateAfterTime: org.settings?.lateAfterTime ?? defaultSettings.lateAfterTime,
      earlyCheckoutBeforeTime:
        org.settings?.earlyCheckoutBeforeTime ?? defaultSettings.earlyCheckoutBeforeTime,
      roles: org.settings?.roles ?? defaultSettings.roles,
      workingDays: org.settings?.workingDays ?? defaultSettings.workingDays,
      analyticsIncludeFutureDays:
        org.settings?.analyticsIncludeFutureDays ??
        defaultSettings.analyticsIncludeFutureDays
    }
  };
  return { ...state, organizations: [...state.organizations, newOrg] };
};

export const replaceOrganizations = (
  state: PersistedState,
  organizations: Organization[]
) => {
  return { ...state, organizations, attendanceByOrg: {} };
};

export const updateOrganization = (
  state: PersistedState,
  orgId: string,
  updates: Partial<Pick<Organization, "name" | "location">>
) => {
  const organizations = state.organizations.map((org) =>
    org.id === orgId ? { ...org, ...updates } : org
  );
  return { ...state, organizations };
};

export const removeOrganization = (state: PersistedState, orgId: string) => {
  const organizations = state.organizations.filter((org) => org.id !== orgId);
  const { [orgId]: _removed, ...remainingAttendance } = state.attendanceByOrg;
  return { ...state, organizations, attendanceByOrg: remainingAttendance };
};

export const updateOrgSettings = (
  state: PersistedState,
  orgId: string,
  settings: OrgSettings
) => {
  const organizations = state.organizations.map((org) =>
    org.id === orgId ? { ...org, settings } : org
  );
  return { ...state, organizations };
};

export const upsertAttendance = (
  state: PersistedState,
  orgId: string,
  record: AttendanceRecord
) => {
  const records = state.attendanceByOrg[orgId] ?? [];
  const nextRecords = records.filter(
    (item) => !(item.staffId === record.staffId && item.dateISO === record.dateISO)
  );
  nextRecords.push(record);
  return {
    ...state,
    attendanceByOrg: {
      ...state.attendanceByOrg,
      [orgId]: nextRecords
    }
  };
};

export const getAttendanceForDate = (
  state: PersistedState,
  orgId: string,
  dateISO: string
) => {
  return (state.attendanceByOrg[orgId] ?? []).filter(
    (item) => item.dateISO === dateISO
  );
};
