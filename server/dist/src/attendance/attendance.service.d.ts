import { PrismaService } from "../prisma/prisma.service";
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toRadians;
    private distanceMeters;
    private assertWithinOfficeGeofence;
    private ensureStaffInOrganization;
    listByOrganizationAndDate(organizationId: string, dateISO: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        staffId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
    }[]>;
    listByOrganization(organizationId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        staffId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
    }[]>;
    signIn(organizationId: string, staffId: string, dateISO: string, role?: string, latitude?: number, longitude?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        staffId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
    } | null>;
    signOut(organizationId: string, staffId: string, dateISO: string, role?: string, latitude?: number, longitude?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        staffId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
    } | null>;
}
