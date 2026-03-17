"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const attendance_service_1 = require("./attendance.service");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
let AttendanceController = class AttendanceController {
    attendanceService;
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    list(orgId, dateISO) {
        return this.attendanceService.listByOrganizationAndDate(orgId, dateISO);
    }
    listForOrganization(orgId) {
        return this.attendanceService.listByOrganization(orgId);
    }
    signIn(body, req) {
        if (req.user?.role === "staff" && req.user.id !== body.staffId) {
            return null;
        }
        return this.attendanceService.signIn(body.organizationId, body.staffId, body.dateISO);
    }
    signOut(body, req) {
        if (req.user?.role === "staff" && req.user.id !== body.staffId) {
            return null;
        }
        return this.attendanceService.signOut(body.organizationId, body.staffId, body.dateISO);
    }
};
exports.AttendanceController = AttendanceController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_attendance"),
    __param(0, (0, common_1.Query)("orgId")),
    __param(1, (0, common_1.Query)("dateISO")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "list", null);
__decorate([
    (0, common_1.Get)("organization/:orgId"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_attendance"),
    __param(0, (0, common_1.Param)("orgId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "listForOrganization", null);
__decorate([
    (0, common_1.Post)("sign-in"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_attendance"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)("sign-out"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_attendance"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AttendanceController.prototype, "signOut", null);
exports.AttendanceController = AttendanceController = __decorate([
    (0, common_1.Controller)("attendance"),
    __metadata("design:paramtypes", [attendance_service_1.AttendanceService])
], AttendanceController);
//# sourceMappingURL=attendance.controller.js.map