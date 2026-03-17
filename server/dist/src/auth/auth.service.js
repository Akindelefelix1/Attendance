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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../prisma/prisma.service");
const crypto = __importStar(require("crypto"));
const COOKIE_NAME = "attendance_token";
const ADMIN_PERMISSIONS = [
    "manage_organizations",
    "manage_staff",
    "manage_attendance",
    "view_analytics",
    "manage_settings"
];
const STAFF_PERMISSIONS = ["manage_attendance"];
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    getAdminLimit(planTier) {
        if (planTier === "pro")
            return 10;
        if (planTier === "plus")
            return 3;
        return 1;
    }
    setCookie(res, token) {
        res.cookie(COOKIE_NAME, token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7
        });
    }
    clearCookie(res) {
        res.clearCookie(COOKIE_NAME);
    }
    async registerAdmin(orgId, email, password, res) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: orgId }
        });
        if (!organization) {
            throw new common_1.UnauthorizedException("Organization not found");
        }
        const limit = this.getAdminLimit(organization.planTier);
        const existingAdmins = await this.prisma.adminUser.count({
            where: { organizationId: orgId }
        });
        if (existingAdmins >= limit) {
            throw new common_1.UnauthorizedException("Admin limit reached for plan tier");
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const admin = await this.prisma.adminUser.create({
            data: {
                organization: { connect: { id: orgId } },
                email: email.trim().toLowerCase(),
                passwordHash,
                permissions: [...ADMIN_PERMISSIONS]
            }
        });
        await this.prisma.organization.update({
            where: { id: orgId },
            data: {
                adminEmails: Array.from(new Set([...organization.adminEmails, admin.email]))
            }
        });
        const token = this.jwtService.sign({
            sub: admin.id,
            orgId,
            email: admin.email,
            role: "admin",
            permissions: admin.permissions.length ? admin.permissions : ADMIN_PERMISSIONS
        });
        this.setCookie(res, token);
        return { admin: { id: admin.id, email: admin.email, orgId } };
    }
    async login(email, password, res) {
        const normalizedEmail = email.trim().toLowerCase();
        const admins = await this.prisma.adminUser.findMany({
            where: { email: normalizedEmail },
            orderBy: { createdAt: "desc" }
        });
        if (admins.length === 0) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        let matchedAdmin = null;
        for (const admin of admins) {
            const ok = await bcrypt.compare(password, admin.passwordHash);
            if (ok) {
                matchedAdmin = admin;
                break;
            }
        }
        if (!matchedAdmin) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const token = this.jwtService.sign({
            sub: matchedAdmin.id,
            orgId: matchedAdmin.organizationId,
            email: matchedAdmin.email,
            role: "admin",
            permissions: matchedAdmin.permissions.length > 0
                ? matchedAdmin.permissions
                : ADMIN_PERMISSIONS
        });
        this.setCookie(res, token);
        return {
            admin: {
                id: matchedAdmin.id,
                email: matchedAdmin.email,
                orgId: matchedAdmin.organizationId
            }
        };
    }
    async staffLogin(email, password, res) {
        const staff = await this.prisma.staffMember.findFirst({
            where: { email: email.trim().toLowerCase() }
        });
        if (!staff?.passwordHash) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        if (!staff.isVerified) {
            throw new common_1.UnauthorizedException("Email not verified");
        }
        const ok = await bcrypt.compare(password, staff.passwordHash);
        if (!ok) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const token = this.jwtService.sign({
            sub: staff.id,
            orgId: staff.organizationId,
            email: staff.email,
            role: "staff",
            permissions: staff.permissions.length ? staff.permissions : STAFF_PERMISSIONS
        });
        this.setCookie(res, token);
        return { staff: { id: staff.id, email: staff.email, orgId: staff.organizationId } };
    }
    async requestStaffVerify(email) {
        const staff = await this.prisma.staffMember.findFirst({
            where: { email: email.trim().toLowerCase() }
        });
        if (!staff)
            return { ok: true };
        const token = crypto.randomUUID();
        await this.prisma.staffMember.update({
            where: { id: staff.id },
            data: { verifyToken: token }
        });
        return { ok: true, token };
    }
    async verifyStaff(token) {
        const staff = await this.prisma.staffMember.findFirst({
            where: { verifyToken: token }
        });
        if (!staff) {
            throw new common_1.UnauthorizedException("Invalid token");
        }
        await this.prisma.staffMember.update({
            where: { id: staff.id },
            data: { isVerified: true, verifyToken: null }
        });
        return { ok: true };
    }
    async requestStaffReset(email) {
        const staff = await this.prisma.staffMember.findFirst({
            where: { email: email.trim().toLowerCase() }
        });
        if (!staff)
            return { ok: true };
        const token = crypto.randomUUID();
        await this.prisma.staffMember.update({
            where: { id: staff.id },
            data: { resetToken: token, resetTokenExp: new Date(Date.now() + 1000 * 60 * 30) }
        });
        return { ok: true, token };
    }
    async resetStaffPassword(token, password) {
        const staff = await this.prisma.staffMember.findFirst({
            where: { resetToken: token }
        });
        if (!staff || !staff.resetTokenExp || staff.resetTokenExp < new Date()) {
            throw new common_1.UnauthorizedException("Invalid token");
        }
        const passwordHash = await bcrypt.hash(password, 10);
        await this.prisma.staffMember.update({
            where: { id: staff.id },
            data: {
                passwordHash,
                resetToken: null,
                resetTokenExp: null
            }
        });
        return { ok: true };
    }
    me(req) {
        const user = req.user;
        return { user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map