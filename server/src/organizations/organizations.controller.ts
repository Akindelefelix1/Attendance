import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { OrganizationsService } from "./organizations.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("organizations")
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
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
    return this.organizationsService.update(id, {
      ...body
    });
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_organizations")
  remove(@Param("id") id: string) {
    return this.organizationsService.remove(id);
  }
}
