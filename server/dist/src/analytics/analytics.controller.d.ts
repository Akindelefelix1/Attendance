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
        }[];
        totals: {
            late: number;
            early: number;
            absent: number;
        };
    }>;
}
