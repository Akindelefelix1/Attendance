import {
  Controller,
  ForbiddenException,
  Get,
  Query,
  Req,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";
import { AnalyticsService } from "./analytics.service";

@Controller("analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

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

  @Get()
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("view_analytics")
  getAnalytics(
    @Query("orgId") orgId: string,
    @Query("range") range: "week" | "month" = "week",
    @Query("filter") filter: "all" | "late" | "early" | "absent" = "all",
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    this.assertOrgScope(orgId, req.user);
    return this.analyticsService.getAnalytics(orgId, range, filter);
  }
}
