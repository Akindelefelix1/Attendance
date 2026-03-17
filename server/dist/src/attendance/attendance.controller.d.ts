import { AttendanceService } from "./attendance.service";
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    list(orgId: string, dateISO: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        staffId: string;
    }[]>;
    listForOrganization(orgId: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    }> | null;
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
