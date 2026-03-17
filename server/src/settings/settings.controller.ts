import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Req,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { SettingsService } from "./settings.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  private assertOrgScope(
    requestOrgId: string,
    user?: { orgId?: string; role?: string }
  ) {
    if (!user) {
      throw new ForbiddenException("Authentication required");
    }
    if (user.role === "super_admin") {
      return;
    }
    if (!user.orgId || user.orgId !== requestOrgId) {
      throw new ForbiddenException("Access denied for this organization");
    }
  }

  @Get(":orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_settings")
  getSettings(
    @Param("orgId") orgId: string,
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    this.assertOrgScope(orgId, req.user);
    return this.settingsService.getSettings(orgId);
  }

  @Patch(":orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_settings")
  updateSettings(
    @Param("orgId") orgId: string,
    @Req() req: { user?: { orgId?: string; role?: string } },
    @Body()
    body: Partial<{
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
    this.assertOrgScope(orgId, req.user);
    return this.settingsService.updateSettings(orgId, body);
  }
}
