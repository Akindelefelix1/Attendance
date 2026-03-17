import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import type { Request } from "express";

const cookieExtractor = (req: Request) => {
  if (!req?.cookies) return null;
  return req.cookies["attendance_token"] ?? null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? "dev-secret"
    });
  }

  validate(payload: {
    sub: string;
    orgId: string;
    email: string;
    role: string;
    permissions?: string[];
  }) {
    return {
      id: payload.sub,
      orgId: payload.orgId,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions ?? []
    };
  }
}
