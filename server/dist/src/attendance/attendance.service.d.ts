import { PrismaService } from "../prisma/prisma.service";
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listByOrganizationAndDate(organizationId: string, dateISO: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }[]>;
    listByOrganization(organizationId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }[]>;
    signIn(organizationId: string, staffId: string, dateISO: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }>;
    signOut(organizationId: string, staffId: string, dateISO: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    } | null>;
}
