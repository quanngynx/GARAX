/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { SuccessResponse } from '@/middlewares';
import { ProductService } from '@/services';
import { getProductById } from '@/common/repositories';

class NewsController {
  getAllProducts = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await ProductService.getAllProducts()
    }).send(res);
  };

  getProductById = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get product success!',
      metadata: await getProductById(req.body)
    }).send(res);
  };

  addNewProduct = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Add new product success!',
      metadata: await ProductService.addNewProduct(req.body)
    }).send(res);
  };

  updateProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: 'Update product success!',
      metadata: await ProductService.updateProductById(Number(id), req.body)
    }).send(res);
  };

  updatePartProductById = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Update {} in product success!',
      metadata: await ProductService.updatePartProductById(req.body, {})
    }).send(res);
  };

  removeProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: 'Remove product success!',
      metadata: await ProductService.removeProductById(Number(id))
    }).send(res);
  };

  removeAllProduct = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Remove all product success!',
      metadata: await ProductService.removeAllProduct()
    }).send(res);
  };

  deleteProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: 'Delete product success!',
      metadata: await ProductService.deleteProductById(Number(id))
    }).send(res);
  };

  deleteAllProduct = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Delete all product success!',
      metadata: await ProductService.deleteAllProduct()
    }).send(res);
  };

  findAllProductPub = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Find all public product success!',
      metadata: await ProductService.findAllProductPublishByQuery()
    }).send(res);
  };

  findAllProductUnPub = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Find all public product success!',
      metadata: await ProductService.findAllProductUnpublishByQuery()
    }).send(res);
  };

  findAllProduct = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Find all product success!',
      metadata: await ProductService.findAllProductByQuery()
    }).send(res);
  };
}

export default new NewsController();
