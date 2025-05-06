/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '../middlewares/success.response';
import { ProductCategoryService } from '../services/productCategory.service';

class ProductCategoryController {
  addNewCategory = async (req: Request, res: Response, _next: NextFunction) => {
    // console.log("body::", req.body)
    new SuccessResponse({
      message: 'Add new product category success!',
      metadata: await ProductCategoryService.addNewCategory(req.body)
    }).send(res);
  };

  getAllCategory = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product category success!',
      metadata: await ProductCategoryService.getAllCategory()
    }).send(res);
  };

  updateTitleCategory = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Update title - product category success!',
      metadata: await ProductCategoryService.updateTitleCategory(req.body)
    }).send(res);
  };

  deleteTitleCategoryByTitle = async (req: Request, res: Response, _next: NextFunction) => {
    const { name } = req.params;
    new SuccessResponse({
      message: 'Delete product category by title success!',
      metadata: await ProductCategoryService.deleteTitleCategoryByTitle(name)
    }).send(res);
  };

  deleteAllTitleCategory = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Delete all product category success!',
      metadata: await ProductCategoryService.deleteAllTitleCategory(req.body)
    }).send(res);
  };
}

export default new ProductCategoryController();
