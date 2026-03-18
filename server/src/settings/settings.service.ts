import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSettings(organizationId: string) {
    return this.prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        id: true,
        lateAfterTime: true,
        earlyCheckoutBeforeTime: true,
        officeGeoFenceEnabled: true,
        officeLatitude: true,
        officeLongitude: true,
        officeRadiusMeters: true,
        roles: true,
        workingDays: true,
        analyticsIncludeFutureDays: true,
        attendanceEditPolicy: true,
        adminEmails: true,
        planTier: true
      }
    });
  }

  async updateSettings(
    organizationId: string,
    data: Partial<{
      lateAfterTime: string;
      earlyCheckoutBeforeTime: string;
      officeGeoFenceEnabled: boolean;
      officeLatitude: number | null;
      officeLongitude: number | null;
      officeRadiusMeters: number;
      roles: string[];
      workingDays: number[];
      analyticsIncludeFutureDays: boolean;
      attendanceEditPolicy: "any" | "self_only";
      adminEmails: string[];
      planTier: "free" | "plus" | "pro";
      staffLoginPassword: string;
    }>
  ) {
    const { staffLoginPassword, ...rest } = data;
    const updateData: {
      lateAfterTime?: string;
      earlyCheckoutBeforeTime?: string;
      officeGeoFenceEnabled?: boolean;
      officeLatitude?: number | null;
      officeLongitude?: number | null;
      officeRadiusMeters?: number;
      roles?: string[];
      workingDays?: number[];
      analyticsIncludeFutureDays?: boolean;
      attendanceEditPolicy?: "any" | "self_only";
      adminEmails?: string[];
      planTier?: "free" | "plus" | "pro";
      staffLoginPasswordHash?: string;
    } = {
      ...rest
    };

    if (typeof staffLoginPassword === "string") {
      const trimmed = staffLoginPassword.trim();
      if (trimmed.length > 0) {
        updateData.staffLoginPasswordHash = await bcrypt.hash(trimmed, 10);
      }
    }

    return this.prisma.organization.update({
      where: { id: organizationId },
      data: updateData
    });
  }
}
