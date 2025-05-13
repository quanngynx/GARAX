/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
// import { RequestQuery } from '@/common/interfaces';
import { SuccessResponse } from '@/middlewares';
import { AddressService } from '@/services';

// interface GetInfoUserByEmailQuery extends RequestQuery {
//   userId: number;
// }

class AddressController {
  getAllAddressByIdAccount = async (req: Request, res: Response, _next: NextFunction) => {
    const { userId } = req.params;
    new SuccessResponse({
      message: 'Get Address success!',
      metadata: await AddressService.getAllAddressByIdAccount(Number(userId))
    }).send(res);
  };

  getAddressById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: 'Get address success!',
      metadata: await AddressService.getAddressById(Number(id))
    }).send(res);
  };

  addNewAddress = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Add new address success!',
      metadata: await AddressService.addNewAddress(req.body)
    }).send(res);
  };

  deleteAddressById = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Add new address success!',
      metadata: await AddressService.deleteAddressById(req.body)
    }).send(res);
  };
}

export default new AddressController();
