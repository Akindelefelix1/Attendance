"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcryptjs"));
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
const main = async () => {
    const orgCount = await prisma.organization.count();
    if (orgCount > 0) {
        return;
    }
    const staffPasswordHash = await bcrypt.hash("staff123", 10);
    const organization = await prisma.organization.create({
        data: {
            name: "Valetax Labs",
            location: "Lagos",
            staffLoginPasswordHash: staffPasswordHash,
            roles: ["Operations", "HR", "Finance"],
            workingDays: [1, 2, 3, 4, 5],
            planTier: "plus",
            adminEmails: []
        }
    });
    const passwordHash = await bcrypt.hash("admin123", 10);
    const admin = await prisma.adminUser.create({
        data: {
            organization: { connect: { id: organization.id } },
            email: "admin@felix.com",
            passwordHash,
            permissions: [
                "manage_organizations",
                "manage_staff",
                "manage_attendance",
                "view_analytics",
                "manage_settings"
            ]
        }
    });
    await prisma.organization.update({
        where: { id: organization.id },
        data: { adminEmails: [admin.email] }
    });
    await prisma.staffMember.createMany({
        data: [
            {
                organizationId: organization.id,
                fullName: "Ifeanyi Eze",
                role: "Operations",
                email: "ifeanyi@valetax.io",
                passwordHash: staffPasswordHash,
                isVerified: true,
                permissions: ["manage_attendance"]
            },
            {
                organizationId: organization.id,
                fullName: "Adaeze Okoro",
                role: "HR",
                email: "adaeze@valetax.io",
                passwordHash: staffPasswordHash,
                isVerified: true,
                permissions: ["manage_attendance"]
            },
            {
                organizationId: organization.id,
                fullName: "Chinedu Obi",
                role: "Finance",
                email: "chinedu@valetax.io",
                passwordHash: staffPasswordHash,
                isVerified: true,
                permissions: ["manage_attendance"]
            }
        ]
    });
    const today = new Date().toISOString().slice(0, 10);
    const staffList = await prisma.staffMember.findMany({
        where: { organizationId: organization.id }
    });
    await prisma.attendanceRecord.createMany({
        data: staffList.map((member, index) => ({
            organizationId: organization.id,
            staffId: member.id,
            dateISO: today,
            signInAt: new Date(Date.now() - (index + 1) * 60 * 60 * 1000),
            signOutAt: index % 2 === 0 ? new Date() : null
        }))
    });
};
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map