import { PrismaService } from "../prisma/prisma.service";
type RangeKey = "week" | "month";
type FilterKey = "all" | "late" | "early" | "absent";
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAnalytics(orgId: string, range: RangeKey, filter: FilterKey): Promise<{
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
export {};
