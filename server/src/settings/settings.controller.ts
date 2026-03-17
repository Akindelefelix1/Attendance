import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { SettingsService } from "./settings.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get(":orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_settings")
  getSettings(@Param("orgId") orgId: string) {
    return this.settingsService.getSettings(orgId);
  }

  @Patch(":orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_settings")
  updateSettings(
    @Param("orgId") orgId: string,
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
    return this.settingsService.updateSettings(orgId, body);
  }
}
