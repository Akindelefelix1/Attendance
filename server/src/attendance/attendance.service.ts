import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  private async ensureStaffInOrganization(staffId: string, organizationId: string) {
    const staff = await this.prisma.staffMember.findUnique({
      where: { id: staffId },
      select: { organizationId: true }
    });
    if (!staff || staff.organizationId !== organizationId) {
      return false;
    }
    return true;
  }

  listByOrganizationAndDate(organizationId: string, dateISO: string) {
    return this.prisma.attendanceRecord.findMany({
      where: { organizationId, dateISO },
      orderBy: { createdAt: "asc" }
    });
  }

  listByOrganization(organizationId: string) {
    return this.prisma.attendanceRecord.findMany({
      where: { organizationId },
      orderBy: { dateISO: "asc" }
    });
  }

  async signIn(organizationId: string, staffId: string, dateISO: string) {
    const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
    if (!isValidStaff) {
      return null;
    }
    const existing = await this.prisma.attendanceRecord.findUnique({
      where: { staffId_dateISO: { staffId, dateISO } }
    });
    return this.prisma.attendanceRecord.upsert({
      where: { staffId_dateISO: { staffId, dateISO } },
      create: {
        organization: { connect: { id: organizationId } },
        staff: { connect: { id: staffId } },
        dateISO,
        signInAt: existing?.signInAt ?? new Date()
      },
      update: {
        signInAt: existing?.signInAt ?? new Date()
      }
    });
  }

  async signOut(organizationId: string, staffId: string, dateISO: string) {
    const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
    if (!isValidStaff) {
      return null;
    }
    const existing = await this.prisma.attendanceRecord.findUnique({
      where: { staffId_dateISO: { staffId, dateISO } }
    });
    if (!existing?.signInAt) {
      return null;
    }
    return this.prisma.attendanceRecord.upsert({
      where: { staffId_dateISO: { staffId, dateISO } },
      create: {
        organization: { connect: { id: organizationId } },
        staff: { connect: { id: staffId } },
        dateISO,
        signInAt: existing.signInAt,
        signOutAt: new Date()
      },
      update: {
        signOutAt: new Date()
      }
    });
  }
}
