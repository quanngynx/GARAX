/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '@/middlewares';
import { PaymentService } from '@/services';
import { RequestBody, RequestParams, ResponseBody } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQuery } from './product.controller';

class PaymentController {
  createPaymentLinkPayOS = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Create payment link success (PayOS)!',
      metadata: await PaymentService.createPaymentLinkPayOS(req.body)
    }).send(res);
  };

  getPaymentLinkInformationPayOS = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get payment link for information PAYOS success!',
      metadata: await PaymentService.getPaymentLinkInformationPayOS(req.body)
    }).send(res);
  };

  cancelPaymentLinkPayOS = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Cancel payment PayOS success!',
      metadata: await PaymentService.cancelPaymentLinkPayOS(req.body)
    }).send(res);
  };

  confirmWebhook = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Confirm webhook success!',
      metadata: await PaymentService.confirmWebhook(req.body)
    }).send(res);
  };

  verifyPaymentWebhookData = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Verify payment webhook data success!',
      metadata: await PaymentService.verifyPaymentWebhookData(req.body)
    }).send(res);
  };

  getAllTransactionsByQueryOptions = async (
    req: Request<RequestParams, ResponseBody, RequestBody, GetAllProductsByQueryOptionsQuery>,
    res: Response,
    _next: NextFunction
  ) => {
    // const { filters, search, sort, pagination } = req.query;
    // console.log('filters::', filters);
    // console.log('search::', search);
    // console.log('sort::', sort);
    // console.log('pagination::', pagination);
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await PaymentService.getAllTransactionsByQueryOptions(req.query)
    }).send(res);
  };

  // createPaymentLinkPressPay = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Create payment link success (PressPay)!',
  //     metadata: await PaymentService.createPaymentLinkPressPay(req.body),
  //   }).send(res);
  // }

  // cancelPaymentPointerWallet = async (
  //   req: Request,
  //   res: Response,
  //   _next: NextFunction
  // ) => {
  //   const { id } = req.params;
  //   new SuccessResponse({
  //     message: 'Cancel payment presspay success!',
  //     metadata: await PaymentService.cancelPaymentPointerWallet(id),
  //   }).send(res);
  // }

  // deleteProductById = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Delete product success!',
  //     metadata: await PaymentService.deleteProductById()
  //   }).send(res)
  // }

  // deleteAllProduct = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Delete all product success!',
  //     metadata: await PaymentService.deleteAllProduct()
  //   }).send(res)
  // }

  // findAllProductPub = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Find all public product success!',
  //     metadata: await PaymentService.findAllProductPub()
  //   }).send(res)
  // }

  // findAllProduct = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Find all product success!',
  //     metadata: await PaymentService.findAllProduct()
  //   }).send(res)
  // }
}
export default new PaymentController();
