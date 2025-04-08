/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { RequestBody, RequestParams, RequestQuery, ResponseBody } from '@/common/interfaces';
import { SuccessResponse } from '@/middlewares';
import { AccountService } from '@/services';

interface GetInfoUserByEmailQuery extends RequestQuery {
  email: string;
}
class AccountController {
  getInfoUserByEmail = async (
    req: Request<RequestParams, ResponseBody, RequestBody, GetInfoUserByEmailQuery>,
    res: Response,
    _next: NextFunction
  ) => {
    const { query } = req;
    new SuccessResponse({
      message: 'Get account success!',
      metadata: await AccountService.getInfoUserByEmail(query)
    }).send(res);
  };
}

export default new AccountController();
