import { PrismaService } from "../prisma/prisma.service";
export declare class SettingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSettings(organizationId: string): Promise<{
        id: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
    } | null>;
    updateSettings(organizationId: string, data: Partial<{
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: "any" | "self_only";
        adminEmails: string[];
        planTier: "free" | "plus" | "pro";
        staffLoginPassword: string;
    }>): Promise<{
        id: string;
        name: string;
        location: string;
        staffLoginPasswordHash: string | null;
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
    }>;
}
