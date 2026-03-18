import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

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
