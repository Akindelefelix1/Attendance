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
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StaffService = class StaffService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    listByOrganization(organizationId) {
        return this.prisma.staffMember.findMany({
            where: { organizationId },
            orderBy: { createdAt: "desc" }
        });
    }
    create(organizationId, payload) {
        return this.prisma.staffMember.create({
            data: {
                organization: { connect: { id: organizationId } },
                fullName: payload.fullName,
                role: payload.role,
                email: payload.email.trim().toLowerCase(),
                isVerified: true,
                verifyToken: null,
                permissions: ["manage_attendance"]
            }
        });
    }
    update(id, payload) {
        return this.prisma.staffMember.update({
            where: { id },
            data: payload
        });
    }
    updateInOrg(id, organizationId, payload) {
        return this.prisma.staffMember.update({
            where: { id, organizationId },
            data: payload
        });
    }
    remove(id) {
        return this.prisma.staffMember.delete({ where: { id } });
    }
    removeInOrg(id, organizationId) {
        return this.prisma.staffMember.delete({
            where: { id, organizationId }
        });
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StaffService);
//# sourceMappingURL=staff.service.js.map