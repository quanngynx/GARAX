require('dotenv').config();
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '../middlewares/success.response';

import { PerrmissionService } from '../services/permission.service';

class PermissionController {
  createAccessForAdmin = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForAdmin(req.body)
    }).send(res)
  }

  createAccessForUser = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForUser(req.body)
    }).send(res)
  }
}
export default new PermissionController()
