"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AdminUserScalarFieldEnum = exports.AttendanceRecordScalarFieldEnum = exports.StaffMemberScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Organization: 'Organization',
    StaffMember: 'StaffMember',
    AttendanceRecord: 'AttendanceRecord',
    AdminUser: 'AdminUser'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    location: 'location',
    lateAfterTime: 'lateAfterTime',
    earlyCheckoutBeforeTime: 'earlyCheckoutBeforeTime',
    roles: 'roles',
    workingDays: 'workingDays',
    analyticsIncludeFutureDays: 'analyticsIncludeFutureDays',
    attendanceEditPolicy: 'attendanceEditPolicy',
    adminEmails: 'adminEmails',
    planTier: 'planTier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StaffMemberScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    fullName: 'fullName',
    role: 'role',
    email: 'email',
    passwordHash: 'passwordHash',
    isVerified: 'isVerified',
    verifyToken: 'verifyToken',
    resetToken: 'resetToken',
    resetTokenExp: 'resetTokenExp',
    appRole: 'appRole',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AttendanceRecordScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    staffId: 'staffId',
    dateISO: 'dateISO',
    signInAt: 'signInAt',
    signOutAt: 'signOutAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AdminUserScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    passwordHash: 'passwordHash',
    appRole: 'appRole',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map