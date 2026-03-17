import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }, res: Response): Promise<{
        admin: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    staffLogin(body: {
        email: string;
        password: string;
    }, res: Response): Promise<{
        staff: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    requestVerify(body: {
        email: string;
    }): Promise<{
        ok: boolean;
        token?: undefined;
    } | {
        ok: boolean;
        token: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    verify(body: {
        token: string;
    }): Promise<{
        ok: boolean;
    }>;
    requestReset(body: {
        email: string;
    }): Promise<{
        ok: boolean;
        token?: undefined;
    } | {
        ok: boolean;
        token: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    reset(body: {
        token: string;
        password: string;
    }): Promise<{
        ok: boolean;
    }>;
    register(body: {
        orgId: string;
        email: string;
        password: string;
    }, res: Response): Promise<{
        admin: {
            id: string;
            email: string;
            orgId: string;
        };
    }>;
    me(req: Request): {
        user: Express.User | undefined;
    };
    logout(res: Response): {
        ok: boolean;
    };
}
