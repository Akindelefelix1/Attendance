import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.login(body.email, body.password, res);
    return result;
  }

  @Post("staff/login")
  async staffLogin(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.staffLogin(body.email, body.password, res);
  }

  @Post("staff/request-verify")
  requestVerify(@Body() body: { email: string }) {
    return this.authService.requestStaffVerify(body.email);
  }

  @Post("staff/verify")
  verify(@Body() body: { token: string }) {
    return this.authService.verifyStaff(body.token);
  }

  @Post("staff/request-reset")
  requestReset(@Body() body: { email: string }) {
    return this.authService.requestStaffReset(body.email);
  }

  @Post("staff/reset")
  reset(@Body() body: { token: string; password: string }) {
    return this.authService.resetStaffPassword(body.token, body.password);
  }

  @Post("register")
  async register(
    @Body() body: { orgId: string; email: string; password: string },
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.registerAdmin(
      body.orgId,
      body.email,
      body.password,
      res
    );
    return result;
  }

  @Get("me")
  @UseGuards(AuthGuard("jwt"))
  me(@Req() req: Request) {
    return this.authService.me(req);
  }

  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response) {
    this.authService.clearCookie(res);
    return { ok: true };
  }
}
