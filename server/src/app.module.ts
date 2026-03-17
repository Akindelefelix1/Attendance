import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { OrganizationsModule } from "./organizations/organizations.module";
import { StaffModule } from "./staff/staff.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { SettingsModule } from "./settings/settings.module";
import { AuthModule } from "./auth/auth.module";
import { AnalyticsModule } from "./analytics/analytics.module";

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    OrganizationsModule,
    StaffModule,
    AttendanceModule,
    SettingsModule,
    AnalyticsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
