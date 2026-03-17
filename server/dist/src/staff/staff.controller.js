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
exports.StaffController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const staff_service_1 = require("./staff.service");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
let StaffController = class StaffController {
    staffService;
    constructor(staffService) {
        this.staffService = staffService;
    }
    assertOrgScope(requestOrgId, user) {
        if (!user) {
            throw new common_1.ForbiddenException("Authentication required");
        }
        if (user.role === "super_admin") {
            return;
        }
        if (!user.orgId || user.orgId !== requestOrgId) {
            throw new common_1.ForbiddenException("Access denied for this organization");
        }
    }
    listByOrganization(orgId, req) {
        this.assertOrgScope(orgId, req.user);
        return this.staffService.listByOrganization(orgId);
    }
    create(req, body) {
        this.assertOrgScope(body.organizationId, req.user);
        return this.staffService.create(body.organizationId, {
            fullName: body.fullName,
            role: body.role,
            email: body.email
        });
    }
    update(id, req, body) {
        if (req.user?.role !== "super_admin") {
            return this.staffService.updateInOrg(id, req.user?.orgId ?? "", body);
        }
        return this.staffService.update(id, body);
    }
    remove(id, req) {
        if (req.user?.role !== "super_admin") {
            return this.staffService.removeInOrg(id, req.user?.orgId ?? "");
        }
        return this.staffService.remove(id);
    }
};
exports.StaffController = StaffController;
__decorate([
    (0, common_1.Get)("organization/:orgId"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_staff"),
    __param(0, (0, common_1.Param)("orgId")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "listByOrganization", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_staff"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_staff"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), permissions_guard_1.PermissionsGuard),
    (0, permissions_decorator_1.Permissions)("manage_staff"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "remove", null);
exports.StaffController = StaffController = __decorate([
    (0, common_1.Controller)("staff"),
    __metadata("design:paramtypes", [staff_service_1.StaffService])
], StaffController);
//# sourceMappingURL=staff.controller.js.map