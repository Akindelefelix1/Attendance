import { AnalyticsService } from "./analytics.service";
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getAnalytics(orgId: string, range?: "week" | "month", filter?: "all" | "late" | "early" | "absent"): Promise<{
        rangeStart: null;
        rangeEnd: null;
        rows: never[];
        totals: {
            late: number;
            early: number;
            absent: number;
        };
    } | {
        rangeStart: string;
        rangeEnd: string;
        rows: {
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
            };
            lateCount: number;
            earlyCount: number;
            absentCount: number;
        }[];
        totals: {
            late: number;
            early: number;
            absent: number;
        };
    }>;
}
