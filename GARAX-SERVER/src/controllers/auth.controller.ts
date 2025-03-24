/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { CREATED, SuccessResponse } from '../middlewares/success.response';
import { AuthJWTService } from '../services/auth.service';
import { KeyStoreRequest } from '@/common/requests/auth';

interface LogoutProps extends Request {
  keyStore: KeyStoreRequest;
}

class AuthController {
  register = async (req: Request, res: Response, _next: NextFunction) => {
    console.log(req.body);
    new SuccessResponse({
      message: 'Success, pls enter otp from your email!',
      metadata: await AuthJWTService.register(req.body)
    }).send(res);
  };

  verifyOtp = async (req: Request, res: Response, _next: NextFunction) => {
    console.log(req.body);
    new CREATED({
      message: 'Register OK!',
      metadata: await AuthJWTService.verifyOtp(req.body),
      option: { message: 'Register successfully!' }
    }).send(res);
  };

  login = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      metadata: await AuthJWTService.login(req.body)
    }).send(res);
  };

  logout = async (req: LogoutProps, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Logout success!',
      metadata: await AuthJWTService.logout(req.keyStore)
    }).send(res);
  };
}

export default new AuthController();
