import { OrganizationsService } from "./organizations.service";
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        staff: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            appRole: import("@prisma/client").$Enums.AppRole;
            permissions: import("@prisma/client").$Enums.Permission[];
            organizationId: string;
            fullName: string;
            role: string;
            isVerified: boolean;
            verifyToken: string | null;
            resetToken: string | null;
            resetTokenExp: Date | null;
        }[];
    } & {
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__OrganizationClient<({
        staff: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            passwordHash: string | null;
            appRole: import("@prisma/client").$Enums.AppRole;
            permissions: import("@prisma/client").$Enums.Permission[];
            organizationId: string;
            fullName: string;
            role: string;
            isVerified: boolean;
            verifyToken: string | null;
            resetToken: string | null;
            resetTokenExp: Date | null;
        }[];
    } & {
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(body: {
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
    }): import("@prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: Partial<{
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
    }>): import("@prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__OrganizationClient<{
        id: string;
        name: string;
        location: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
