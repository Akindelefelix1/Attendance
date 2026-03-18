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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toRadians(value) {
        return (value * Math.PI) / 180;
    }
    distanceMeters(latitudeA, longitudeA, latitudeB, longitudeB) {
        const earthRadius = 6371000;
        const dLat = this.toRadians(latitudeB - latitudeA);
        const dLon = this.toRadians(longitudeB - longitudeA);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRadians(latitudeA)) *
                Math.cos(this.toRadians(latitudeB)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadius * c;
    }
    async assertWithinOfficeGeofence(organizationId, role, latitude, longitude) {
        if (role !== "staff") {
            return;
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id: organizationId },
            select: {
                officeGeoFenceEnabled: true,
                officeLatitude: true,
                officeLongitude: true,
                officeRadiusMeters: true
            }
        });
        if (!organization?.officeGeoFenceEnabled) {
            return;
        }
        const officeLatitude = organization.officeLatitude;
        const officeLongitude = organization.officeLongitude;
        const officeRadiusMeters = organization.officeRadiusMeters ?? 150;
        if (officeLatitude == null ||
            officeLongitude == null ||
            officeRadiusMeters <= 0) {
            throw new common_1.ForbiddenException("Office geofence is not configured");
        }
        if (typeof latitude !== "number" || typeof longitude !== "number") {
            throw new common_1.ForbiddenException("Location is required for attendance");
        }
        const distance = this.distanceMeters(latitude, longitude, officeLatitude, officeLongitude);
        if (distance > officeRadiusMeters) {
            throw new common_1.ForbiddenException("You must be within office location to sign in/out");
        }
    }
    async ensureStaffInOrganization(staffId, organizationId) {
        const staff = await this.prisma.staffMember.findUnique({
            where: { id: staffId },
            select: { organizationId: true }
        });
        if (!staff || staff.organizationId !== organizationId) {
            return false;
        }
        return true;
    }
    listByOrganizationAndDate(organizationId, dateISO) {
        return this.prisma.attendanceRecord.findMany({
            where: { organizationId, dateISO },
            orderBy: { createdAt: "asc" }
        });
    }
    listByOrganization(organizationId) {
        return this.prisma.attendanceRecord.findMany({
            where: { organizationId },
            orderBy: { dateISO: "asc" }
        });
    }
    async signIn(organizationId, staffId, dateISO, role, latitude, longitude) {
        const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
        if (!isValidStaff) {
            return null;
        }
        await this.assertWithinOfficeGeofence(organizationId, role, latitude, longitude);
        const existing = await this.prisma.attendanceRecord.findUnique({
            where: { staffId_dateISO: { staffId, dateISO } }
        });
        return this.prisma.attendanceRecord.upsert({
            where: { staffId_dateISO: { staffId, dateISO } },
            create: {
                organization: { connect: { id: organizationId } },
                staff: { connect: { id: staffId } },
                dateISO,
                signInAt: existing?.signInAt ?? new Date()
            },
            update: {
                signInAt: existing?.signInAt ?? new Date()
            }
        });
    }
    async signOut(organizationId, staffId, dateISO, role, latitude, longitude) {
        const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
        if (!isValidStaff) {
            return null;
        }
        await this.assertWithinOfficeGeofence(organizationId, role, latitude, longitude);
        const existing = await this.prisma.attendanceRecord.findUnique({
            where: { staffId_dateISO: { staffId, dateISO } }
        });
        if (!existing?.signInAt) {
            return null;
        }
        return this.prisma.attendanceRecord.upsert({
            where: { staffId_dateISO: { staffId, dateISO } },
            create: {
                organization: { connect: { id: organizationId } },
                staff: { connect: { id: staffId } },
                dateISO,
                signInAt: existing.signInAt,
                signOutAt: new Date()
            },
            update: {
                signOutAt: new Date()
            }
        });
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map