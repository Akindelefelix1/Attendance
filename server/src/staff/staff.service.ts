import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as crypto from "crypto";

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  listByOrganization(organizationId: string) {
    return this.prisma.staffMember.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" }
    });
  }

  create(organizationId: string, payload: { fullName: string; role: string; email: string }) {
    return this.prisma.staffMember.create({
      data: {
        organization: { connect: { id: organizationId } },
        fullName: payload.fullName,
        role: payload.role,
        email: payload.email,
        verifyToken: crypto.randomUUID(),
        permissions: ["manage_attendance"]
      }
    });
  }

  update(id: string, payload: { fullName?: string; role?: string; email?: string }) {
    return this.prisma.staffMember.update({
      where: { id },
      data: payload
    });
  }

  remove(id: string) {
    return this.prisma.staffMember.delete({ where: { id } });
  }
}
