export type AttendanceStatus = "not-signed" | "signed-in" | "signed-out";

export type StaffMember = {
  id: string;
  fullName: string;
  role: string;
  email: string;
};

export type OrgSettings = {
  lateAfterTime: string;
  earlyCheckoutBeforeTime: string;
  roles: string[];
  workingDays: number[];
  analyticsIncludeFutureDays: boolean;
  attendanceEditPolicy: "any" | "self-only";
  adminEmails: string[];
  planTier: "free" | "plus" | "pro";
};

export type Organization = {
  id: string;
  name: string;
  location: string;
  staff: StaffMember[];
  settings: OrgSettings;
};

export type AttendanceRecord = {
  staffId: string;
  dateISO: string;
  signInAt?: string;
  signOutAt?: string;
};
