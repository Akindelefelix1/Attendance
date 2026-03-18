import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  private toRadians(value: number) {
    return (value * Math.PI) / 180;
  }

  private distanceMeters(
    latitudeA: number,
    longitudeA: number,
    latitudeB: number,
    longitudeB: number
  ) {
    const earthRadius = 6371000;
    const dLat = this.toRadians(latitudeB - latitudeA);
    const dLon = this.toRadians(longitudeB - longitudeA);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(latitudeA)) *
        Math.cos(this.toRadians(latitudeB)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  }

  private async assertWithinOfficeGeofence(
    organizationId: string,
    role?: string,
    latitude?: number,
    longitude?: number
  ) {
    if (role !== "staff") {
      return;
    }

    const organization = await this.prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        officeGeoFenceEnabled: true,
        officeLatitude: true,
        officeLongitude: true,
        officeRadiusMeters: true
      }
    });

    if (!organization?.officeGeoFenceEnabled) {
      return;
    }

    const officeLatitude = organization.officeLatitude;
    const officeLongitude = organization.officeLongitude;
    const officeRadiusMeters = organization.officeRadiusMeters ?? 150;

    if (
      officeLatitude == null ||
      officeLongitude == null ||
      officeRadiusMeters <= 0
    ) {
      throw new ForbiddenException("Office geofence is not configured");
    }

    if (typeof latitude !== "number" || typeof longitude !== "number") {
      throw new ForbiddenException("Location is required for attendance");
    }

    const distance = this.distanceMeters(
      latitude,
      longitude,
      officeLatitude,
      officeLongitude
    );

    if (distance > officeRadiusMeters) {
      throw new ForbiddenException("You must be within office location to sign in/out");
    }
  }

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

  async signIn(
    organizationId: string,
    staffId: string,
    dateISO: string,
    role?: string,
    latitude?: number,
    longitude?: number
  ) {
    const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
    if (!isValidStaff) {
      return null;
    }
    await this.assertWithinOfficeGeofence(
      organizationId,
      role,
      latitude,
      longitude
    );
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

  async signOut(
    organizationId: string,
    staffId: string,
    dateISO: string,
    role?: string,
    latitude?: number,
    longitude?: number
  ) {
    const isValidStaff = await this.ensureStaffInOrganization(staffId, organizationId);
    if (!isValidStaff) {
      return null;
    }
    await this.assertWithinOfficeGeofence(
      organizationId,
      role,
      latitude,
      longitude
    );
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
