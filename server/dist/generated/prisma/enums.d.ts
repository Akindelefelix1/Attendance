export declare const PlanTier: {
    readonly free: "free";
    readonly plus: "plus";
    readonly pro: "pro";
};
export type PlanTier = (typeof PlanTier)[keyof typeof PlanTier];
export declare const AttendanceEditPolicy: {
    readonly any: "any";
    readonly self_only: "self_only";
};
export type AttendanceEditPolicy = (typeof AttendanceEditPolicy)[keyof typeof AttendanceEditPolicy];
export declare const AppRole: {
    readonly admin: "admin";
    readonly staff: "staff";
};
export type AppRole = (typeof AppRole)[keyof typeof AppRole];
export declare const Permission: {
    readonly manage_organizations: "manage_organizations";
    readonly manage_staff: "manage_staff";
    readonly manage_attendance: "manage_attendance";
    readonly view_analytics: "view_analytics";
    readonly manage_settings: "manage_settings";
};
export type Permission = (typeof Permission)[keyof typeof Permission];
