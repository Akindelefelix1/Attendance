import { AttendanceService } from "./attendance.service";
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    private assertOrgScope;
    list(orgId: string, dateISO: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }[]>;
    listForOrganization(orgId: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }[]>;
    signIn(body: {
        organizationId: string;
        staffId: string;
        dateISO: string;
    }, req: {
        user?: {
            role?: string;
            id?: string;
        };
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    } | null> | null;
    signOut(body: {
        organizationId: string;
        staffId: string;
        dateISO: string;
    }, req: {
        user?: {
            role?: string;
            id?: string;
        };
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    } | null> | null;
}
