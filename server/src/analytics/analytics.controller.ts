import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";
import { AnalyticsService } from "./analytics.service";

@Controller("analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("view_analytics")
  getAnalytics(
    @Query("orgId") orgId: string,
    @Query("range") range: "week" | "month" = "week",
    @Query("filter") filter: "all" | "late" | "early" | "absent" = "all"
  ) {
    return this.analyticsService.getAnalytics(orgId, range, filter);
  }
}
