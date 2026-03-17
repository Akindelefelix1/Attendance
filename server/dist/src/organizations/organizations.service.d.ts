import { PrismaService } from "../prisma/prisma.service";
import type { Prisma } from "@prisma/client";
export declare class OrganizationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Prisma.PrismaPromise<({
        staff: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            fullName: string;
            role: string;
            email: string;
            passwordHash: string | null;
            isVerified: boolean;
            verifyToken: string | null;
            resetToken: string | null;
            resetTokenExp: Date | null;
            appRole: import("@prisma/client").$Enums.AppRole;
            permissions: import("@prisma/client").$Enums.Permission[];
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
    findAllForOrg(orgId: string): Prisma.PrismaPromise<({
        staff: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            fullName: string;
            role: string;
            email: string;
            passwordHash: string | null;
            isVerified: boolean;
            verifyToken: string | null;
            resetToken: string | null;
            resetTokenExp: Date | null;
            appRole: import("@prisma/client").$Enums.AppRole;
            permissions: import("@prisma/client").$Enums.Permission[];
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
    findOne(id: string): Prisma.Prisma__OrganizationClient<({
        staff: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            fullName: string;
            role: string;
            email: string;
            passwordHash: string | null;
            isVerified: boolean;
            verifyToken: string | null;
            resetToken: string | null;
            resetTokenExp: Date | null;
            appRole: import("@prisma/client").$Enums.AppRole;
            permissions: import("@prisma/client").$Enums.Permission[];
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    create(data: Prisma.OrganizationCreateInput): Prisma.Prisma__OrganizationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: string, data: Prisma.OrganizationUpdateInput): Prisma.Prisma__OrganizationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: string): Prisma.Prisma__OrganizationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
