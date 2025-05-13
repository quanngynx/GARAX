/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '../middlewares/success.response';

import { PerrmissionService } from '../services/permission.service';

class PermissionController {
  createAccessForAdmin = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForAdmin()
    }).send(res);
  };

  createAccessForUser = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForUser()
    }).send(res);
  };
}
export default new PermissionController();
