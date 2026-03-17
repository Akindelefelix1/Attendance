import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Organization: "Organization";
    readonly StaffMember: "StaffMember";
    readonly AttendanceRecord: "AttendanceRecord";
    readonly AdminUser: "AdminUser";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly location: "location";
    readonly lateAfterTime: "lateAfterTime";
    readonly earlyCheckoutBeforeTime: "earlyCheckoutBeforeTime";
    readonly roles: "roles";
    readonly workingDays: "workingDays";
    readonly analyticsIncludeFutureDays: "analyticsIncludeFutureDays";
    readonly attendanceEditPolicy: "attendanceEditPolicy";
    readonly adminEmails: "adminEmails";
    readonly planTier: "planTier";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const StaffMemberScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly isVerified: "isVerified";
    readonly verifyToken: "verifyToken";
    readonly resetToken: "resetToken";
    readonly resetTokenExp: "resetTokenExp";
    readonly appRole: "appRole";
    readonly permissions: "permissions";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StaffMemberScalarFieldEnum = (typeof StaffMemberScalarFieldEnum)[keyof typeof StaffMemberScalarFieldEnum];
export declare const AttendanceRecordScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly staffId: "staffId";
    readonly dateISO: "dateISO";
    readonly signInAt: "signInAt";
    readonly signOutAt: "signOutAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly appRole: "appRole";
    readonly permissions: "permissions";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
