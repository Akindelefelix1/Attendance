import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import type { Prisma } from "@prisma/client";

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.organization.findMany({
      orderBy: { createdAt: "desc" },
      include: { staff: true }
    });
  }

  findAllForOrg(orgId: string) {
    return this.prisma.organization.findMany({
      where: { id: orgId },
      include: { staff: true }
    });
  }

  findOne(id: string) {
    return this.prisma.organization.findUnique({
      where: { id },
      include: { staff: true }
    });
  }

  create(data: Prisma.OrganizationCreateInput) {
    return this.prisma.organization.create({ data });
  }

  update(id: string, data: Prisma.OrganizationUpdateInput) {
    return this.prisma.organization.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.organization.delete({ where: { id } });
  }
}
