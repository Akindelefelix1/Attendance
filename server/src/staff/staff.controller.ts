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
import { StaffService } from "./staff.service";
import { Permissions } from "../auth/permissions.decorator";
import { PermissionsGuard } from "../auth/permissions.guard";

@Controller("staff")
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get("organization/:orgId")
  listByOrganization(@Param("orgId") orgId: string) {
    return this.staffService.listByOrganization(orgId);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  create(
    @Body()
    body: { organizationId: string; fullName: string; role: string; email: string }
  ) {
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
    @Body() body: { fullName?: string; role?: string; email?: string }
  ) {
    return this.staffService.update(id, body);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), PermissionsGuard)
  @Permissions("manage_staff")
  remove(@Param("id") id: string) {
    return this.staffService.remove(id);
  }
}
