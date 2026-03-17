import { Injectable, UnauthorizedException } from "@nestjs/common";
import type { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";
import type { Permission } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service";
import * as crypto from "crypto";

const COOKIE_NAME = "attendance_token";
const ADMIN_PERMISSIONS = [
  "manage_organizations",
  "manage_staff",
  "manage_attendance",
  "view_analytics",
  "manage_settings"
] as const satisfies readonly Permission[];
const STAFF_PERMISSIONS = ["manage_attendance"] as const satisfies readonly Permission[];

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  private getAdminLimit(planTier: "free" | "plus" | "pro") {
    if (planTier === "pro") return 10;
    if (planTier === "plus") return 3;
    return 1;
  }

  private setCookie(res: Response, token: string) {
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
  }

  clearCookie(res: Response) {
    res.clearCookie(COOKIE_NAME);
  }

  async registerAdmin(orgId: string, email: string, password: string, res: Response) {
    const organization = await this.prisma.organization.findUnique({
      where: { id: orgId }
    });
    if (!organization) {
      throw new UnauthorizedException("Organization not found");
    }
    const limit = this.getAdminLimit(organization.planTier);
    const existingAdmins = await this.prisma.adminUser.count({
      where: { organizationId: orgId }
    });
    if (existingAdmins >= limit) {
      throw new UnauthorizedException("Admin limit reached for plan tier");
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
        adminEmails: Array.from(
          new Set([...organization.adminEmails, admin.email])
        )
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

  async login(email: string, password: string, res: Response) {
    const admin = await this.prisma.adminUser.findFirst({
      where: { email: email.trim().toLowerCase() }
    });
    if (!admin) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const token = this.jwtService.sign({
      sub: admin.id,
      orgId: admin.organizationId,
      email: admin.email,
      role: "admin",
      permissions: admin.permissions.length ? admin.permissions : ADMIN_PERMISSIONS
    });
    this.setCookie(res, token);
    return { admin: { id: admin.id, email: admin.email, orgId: admin.organizationId } };
  }

  async staffLogin(email: string, password: string, res: Response) {
    const staff = await this.prisma.staffMember.findFirst({
      where: { email: email.trim().toLowerCase() }
    });
    if (!staff?.passwordHash) {
      throw new UnauthorizedException("Invalid credentials");
    }
    if (!staff.isVerified) {
      throw new UnauthorizedException("Email not verified");
    }
    const ok = await bcrypt.compare(password, staff.passwordHash);
    if (!ok) {
      throw new UnauthorizedException("Invalid credentials");
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

  async requestStaffVerify(email: string) {
    const staff = await this.prisma.staffMember.findFirst({
      where: { email: email.trim().toLowerCase() }
    });
    if (!staff) return { ok: true };
    const token = crypto.randomUUID();
    await this.prisma.staffMember.update({
      where: { id: staff.id },
      data: { verifyToken: token }
    });
    return { ok: true, token };
  }

  async verifyStaff(token: string) {
    const staff = await this.prisma.staffMember.findFirst({
      where: { verifyToken: token }
    });
    if (!staff) {
      throw new UnauthorizedException("Invalid token");
    }
    await this.prisma.staffMember.update({
      where: { id: staff.id },
      data: { isVerified: true, verifyToken: null }
    });
    return { ok: true };
  }

  async requestStaffReset(email: string) {
    const staff = await this.prisma.staffMember.findFirst({
      where: { email: email.trim().toLowerCase() }
    });
    if (!staff) return { ok: true };
    const token = crypto.randomUUID();
    await this.prisma.staffMember.update({
      where: { id: staff.id },
      data: { resetToken: token, resetTokenExp: new Date(Date.now() + 1000 * 60 * 30) }
    });
    return { ok: true, token };
  }

  async resetStaffPassword(token: string, password: string) {
    const staff = await this.prisma.staffMember.findFirst({
      where: { resetToken: token }
    });
    if (!staff || !staff.resetTokenExp || staff.resetTokenExp < new Date()) {
      throw new UnauthorizedException("Invalid token");
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

  me(req: Request) {
    const user = (req as Request & { user?: unknown }).user;
    return { user };
  }
}
