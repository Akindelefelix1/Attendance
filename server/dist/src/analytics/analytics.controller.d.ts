import { AnalyticsService } from "./analytics.service";
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    private assertOrgScope;
    getAnalytics(orgId: string, range: "week" | "month" | undefined, filter: "all" | "late" | "early" | "absent" | undefined, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): Promise<{
        rangeStart: null;
        rangeEnd: null;
        rows: never[];
        totals: {
            late: number;
            early: number;
            absent: number;
        };
        punctualityTrends: never[];
        reliability: {
            expectedDays: number;
            averageAttendanceRate: number;
            averagePunctualityRate: number;
            averageLateMinutes: number;
            averageEarlyCheckoutMinutes: number;
            staff: never[];
        };
        roleInsights: never[];
        geoPolicyCompliance: {
            geoFenceEnabled: boolean;
            geoFenceConfigured: boolean;
            officeRadiusMeters: null;
            attendanceEditPolicy: string;
            analyticsIncludeFutureDays: boolean;
            expectedCheckIns: number;
            actualCheckIns: number;
            missingCheckIns: number;
            policyBreachEvents: number;
            complianceRate: number;
        };
    } | {
        rangeStart: string;
        rangeEnd: string;
        rows: {
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
            };
            lateCount: number;
            earlyCount: number;
            absentCount: number;
            expectedDays: number;
            presentCount: number;
            onTimeCount: number;
            attendanceRate: number;
            punctualityRate: number;
            avgLateMinutes: number;
            avgEarlyCheckoutMinutes: number;
            currentAttendanceStreak: number;
            maxAttendanceStreak: number;
            maxAbsenceStreak: number;
            policyBreaches: number;
        }[];
        totals: {
            late: number;
            early: number;
            absent: number;
        };
        punctualityTrends: {
            dateISO: string;
            onTime: number;
            late: number;
            earlyCheckout: number;
            absent: number;
            attendanceRate: number;
            punctualityRate: number;
            avgLateMinutes: number;
            avgEarlyCheckoutMinutes: number;
        }[];
        reliability: {
            expectedDays: number;
            averageAttendanceRate: number;
            averagePunctualityRate: number;
            averageLateMinutes: number;
            averageEarlyCheckoutMinutes: number;
            staff: {
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
                };
                expectedDays: number;
                presentDays: number;
                attendanceRate: number;
                punctualityRate: number;
                maxAttendanceStreak: number;
                maxAbsenceStreak: number;
                avgLateMinutes: number;
                avgEarlyCheckoutMinutes: number;
                policyBreaches: number;
            }[];
        };
        roleInsights: {
            attendanceRate: number;
            punctualityRate: number;
            policyBreaches: number;
            role: string;
            staffCount: number;
            lateCount: number;
            earlyCount: number;
            absentCount: number;
            expectedDays: number;
            presentDays: number;
            onTimeDays: number;
        }[];
        geoPolicyCompliance: {
            geoFenceEnabled: boolean;
            geoFenceConfigured: boolean;
            officeRadiusMeters: number | null;
            attendanceEditPolicy: import("@prisma/client").$Enums.AttendanceEditPolicy;
            analyticsIncludeFutureDays: boolean;
            expectedCheckIns: number;
            actualCheckIns: number;
            missingCheckIns: number;
            policyBreachEvents: number;
            complianceRate: number;
        };
    }>;
}
