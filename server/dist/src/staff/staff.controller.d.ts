import { StaffService } from "./staff.service";
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    listByOrganization(orgId: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    create(body: {
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
    update(id: string, body: {
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__StaffMemberClient<{
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
