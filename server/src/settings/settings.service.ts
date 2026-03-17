import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

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
        roles: true,
        workingDays: true,
        analyticsIncludeFutureDays: true,
        attendanceEditPolicy: true,
        adminEmails: true,
        planTier: true
      }
    });
  }

  updateSettings(
    organizationId: string,
    data: Partial<{
      lateAfterTime: string;
      earlyCheckoutBeforeTime: string;
      roles: string[];
      workingDays: number[];
      analyticsIncludeFutureDays: boolean;
      attendanceEditPolicy: "any" | "self_only";
      adminEmails: string[];
      planTier: "free" | "plus" | "pro";
    }>
  ) {
    return this.prisma.organization.update({
      where: { id: organizationId },
      data
    });
  }
}
