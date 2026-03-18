import { StaffService } from "./staff.service";
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    private assertOrgScope;
    listByOrganization(orgId: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): import("@prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    create(req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }, body: {
        organizationId: string;
        fullName: string;
        role: string;
        email: string;
    }): import("@prisma/client").Prisma.Prisma__StaffMemberClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }, body: {
        fullName?: string;
        role?: string;
        email?: string;
    }): import("@prisma/client").Prisma.Prisma__StaffMemberClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string, req: {
        user?: {
            orgId?: string;
            role?: string;
        };
    }): import("@prisma/client").Prisma.Prisma__StaffMemberClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
