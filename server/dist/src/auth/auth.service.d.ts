import type { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private getAdminLimit;
    private setCookie;
    clearCookie(res: Response): void;
    registerAdmin(orgId: string, email: string, password: string, res: Response): Promise<{
        admin: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    login(email: string, password: string, res: Response): Promise<{
        admin: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    staffLogin(email: string, password: string, res: Response): Promise<{
        staff: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    requestStaffVerify(email: string): Promise<{
        ok: boolean;
        token?: undefined;
    } | {
        ok: boolean;
        token: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    verifyStaff(token: string): Promise<{
        ok: boolean;
    }>;
    requestStaffReset(email: string): Promise<{
        ok: boolean;
        token?: undefined;
    } | {
        ok: boolean;
        token: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    resetStaffPassword(token: string, password: string): Promise<{
        ok: boolean;
    }>;
    me(req: Request): {
        user: Express.User | undefined;
    };
}
