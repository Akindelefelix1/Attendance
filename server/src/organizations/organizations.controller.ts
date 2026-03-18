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
import { OrganizationsService } from "./organizations.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("organizations")
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

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
  @UseGuards(AuthGuard("jwt"))
  findAll(@Req() req: { user?: { orgId?: string; role?: string } }) {
    if (req.user?.role === "super_admin") {
      return this.organizationsService.findAll();
    }
    if (!req.user?.orgId) {
      throw new ForbiddenException("Access denied for this organization");
    }
    return this.organizationsService.findAllForOrg(req.user.orgId);
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(
    @Param("id") id: string,
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    this.assertOrgScope(id, req.user);
    return this.organizationsService.findOne(id);
  }

  @Post()
  create(
    @Body()
    body: {
      name: string;
      location: string;
      lateAfterTime?: string;
      earlyCheckoutBeforeTime?: string;
      roles?: string[];
      workingDays?: number[];
      analyticsIncludeFutureDays?: boolean;
      attendanceEditPolicy?: "any" | "self_only";
      adminEmails?: string[];
      planTier?: "free" | "plus" | "pro";
    }
  ) {
    return this.organizationsService.create({
      name: body.name,
      location: body.location,
      lateAfterTime: body.lateAfterTime ?? undefined,
      earlyCheckoutBeforeTime: body.earlyCheckoutBeforeTime ?? undefined,
      roles: body.roles ?? [],
      workingDays: body.workingDays ?? [1, 2, 3, 4, 5],
      analyticsIncludeFutureDays: body.analyticsIncludeFutureDays ?? false,
      attendanceEditPolicy: body.attendanceEditPolicy ?? "any",
      adminEmails: body.adminEmails ?? [],
      planTier: body.planTier ?? "free"
    });
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_organizations")
  update(
    @Param("id") id: string,
    @Req() req: { user?: { orgId?: string; role?: string } },
    @Body()
    body: Partial<{
      name: string;
      location: string;
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
    this.assertOrgScope(id, req.user);
    return this.organizationsService.update(id, {
      ...body
    });
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_organizations")
  remove(
    @Param("id") id: string,
    @Req() req: { user?: { orgId?: string; role?: string } }
  ) {
    this.assertOrgScope(id, req.user);
    return this.organizationsService.remove(id);
  }
}
