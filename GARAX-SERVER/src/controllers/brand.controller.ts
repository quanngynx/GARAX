/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '../middlewares/success.response';
import { BrandService } from '@/services';
import { RequestBody, RequestParams, ResponseBody } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQuery } from './product.controller';

class BrandController {
  addNewBrand = async (req: Request, res: Response, _next: NextFunction) => {
    // console.log("body::", req.body)
    new SuccessResponse({
      message: 'Add new product category success!',
      metadata: await BrandService.addNewBrand(req.body)
    }).send(res);
  };

  getAllBrand = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product Brand success!',
      metadata: await BrandService.getAllBrand()
    }).send(res);
  };

  getAllBrandsByQueryOptions = async (
    req: Request<RequestParams, ResponseBody, RequestBody, GetAllProductsByQueryOptionsQuery>,
    res: Response,
    _next: NextFunction
  ) => {
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await BrandService.getAllBrandsByQueryOptions(req.query)
    }).send(res);
  };

  // updateTitleCategory = async (req: Request, res: Response, _next: NextFunction) => {
  //   const { name } = req.params;
  //   new SuccessResponse({
  //     message: 'Update title - product category success!',
  //     metadata: await BrandService.updateTitleCategory(name)
  //   }).send(res)
  // }

  // deleteTitleCategoryByTitle = async (req: Request, res: Response, _next: NextFunction) => {
  //   const { name } = req.params;
  //   new SuccessResponse({
  //     message: 'Delete product category by title success!',
  //     metadata: await BrandService.deleteTitleCategoryByTitle(name)
  //   }).send(res)
  // }

  // deleteAllTitleCategory = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Delete all product category success!',
  //     metadata: await BrandService.deleteAllTitleCategory(req.body)
  //   }).send(res)
  // }
}

export default new BrandController();
