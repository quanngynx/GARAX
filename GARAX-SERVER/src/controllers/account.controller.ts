import { NextFunction, Request, Response } from 'express';
import { RequestBody, RequestParams, RequestQuery, ResponseBody } from '@/common/interfaces';
import { SuccessResponse } from '@/middlewares';
import { AccountService } from '@/services';

class AccountController {
  getInfoUserByEmail = async (
    req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
    res: Response,
    _next: NextFunction
  ) => {
    const { query } = req;
    new SuccessResponse({
      message: 'Get account success!',
      metadata: await AccountService.getInfoUserByEmail(query),
    }).send(res);
  };
}

export default new AccountController()
