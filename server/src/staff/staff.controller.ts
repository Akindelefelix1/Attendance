import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { StaffService } from "./staff.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("staff")
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

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

  @Get("organization/:orgId")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  listByOrganization(
    @Param("orgId") orgId: string,
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    this.assertOrgScope(orgId, req.user);
    return this.staffService.listByOrganization(orgId);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  create(
    @Req() req: { user?: { orgId?: string; role?: string } },
    @Body()
    body: { organizationId: string; fullName: string; role: string; email: string }
  ) {
    this.assertOrgScope(body.organizationId, req.user);
    return this.staffService.create(body.organizationId, {
      fullName: body.fullName,
      role: body.role,
      email: body.email
    });
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  update(
    @Param("id") id: string,
    @Req() req: { user?: { orgId?: string; role?: string } },
    @Body() body: { fullName?: string; role?: string; email?: string }
  ) {
    if (req.user?.role !== "super_admin") {
      return this.staffService.updateInOrg(id, req.user?.orgId ?? "", body);
    }
    return this.staffService.update(id, body);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  remove(
    @Param("id") id: string,
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    if (req.user?.role !== "super_admin") {
      return this.staffService.removeInOrg(id, req.user?.orgId ?? "");
    }
    return this.staffService.remove(id);
  }
}
