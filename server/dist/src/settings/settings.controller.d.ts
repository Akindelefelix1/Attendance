import { SettingsService } from "./settings.service";
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    private assertOrgScope;
    getSettings(orgId: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): Promise<{
        id: string;
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        roles: string[];
        workingDays: number[];
        analyticsIncludeFutureDays: boolean;
        attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
        adminEmails: string[];
        planTier: import("@prisma/client").$Enums.PlanTier;
        officeGeoFenceEnabled: boolean;
        officeLatitude: number | null;
        officeLongitude: number | null;
        officeRadiusMeters: number | null;
    } | null>;
    updateSettings(orgId: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }, body: Partial<{
        lateAfterTime: string;
        earlyCheckoutBeforeTime: string;
        officeGeoFenceEnabled: boolean;
        officeLatitude: number | null;
        officeLongitude: number | null;
        officeRadiusMeters: number;
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
        staffLoginPasswordHash: string | null;
        officeGeoFenceEnabled: boolean;
        officeLatitude: number | null;
        officeLongitude: number | null;
        officeRadiusMeters: number | null;
    }>;
}
