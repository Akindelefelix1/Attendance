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
    async signIn(organizationId, staffId, dateISO) {
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
    async signOut(organizationId, staffId, dateISO) {
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