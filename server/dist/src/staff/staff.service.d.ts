import { PrismaService } from "../prisma/prisma.service";
export declare class StaffService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listByOrganization(organizationId: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    create(organizationId: string, payload: {
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
    update(id: string, payload: {
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
    updateInOrg(id: string, organizationId: string, payload: {
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
    removeInOrg(id: string, organizationId: string): import("@prisma/client").Prisma.Prisma__StaffMemberClient<{
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
