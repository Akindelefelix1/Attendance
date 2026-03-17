import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AttendanceService } from "./attendance.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_attendance")
  list(@Query("orgId") orgId: string, @Query("dateISO") dateISO: string) {
    return this.attendanceService.listByOrganizationAndDate(orgId, dateISO);
  }

  @Get("organization/:orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_attendance")
  listForOrganization(@Param("orgId") orgId: string) {
    return this.attendanceService.listByOrganization(orgId);
  }

  @Post("sign-in")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_attendance")
  signIn(
    @Body()
    body: {
      organizationId: string;
      staffId: string;
      dateISO: string;
    },
    @Req() req: { user?: { role?: string; id?: string } }
  ) {
    if (req.user?.role === "staff" && req.user.id !== body.staffId) {
      return null;
    }
    return this.attendanceService.signIn(body.organizationId, body.staffId, body.dateISO);
  }

  @Post("sign-out")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_attendance")
  signOut(
    @Body()
    body: {
      organizationId: string;
      staffId: string;
      dateISO: string;
    },
    @Req() req: { user?: { role?: string; id?: string } }
  ) {
    if (req.user?.role === "staff" && req.user.id !== body.staffId) {
      return null;
    }
    return this.attendanceService.signOut(body.organizationId, body.staffId, body.dateISO);
  }
}
