/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { SuccessResponse } from '@/middlewares';
import { ProductService } from '@/services';
import { getProductById, getProductVariantValueByIdProduct } from '@/common/repositories';
import { QueryOptions, RequestBody, RequestParams, RequestQuery, ResponseBody } from '@/common/interfaces';
import { ProductModel } from '@/models';

// interface GetAllProductsByQueryOptionsParam extends RequestParams {
//   options: GetAllProductsByQueryOptions;
// }
interface GetAllProductsByQueryOptionsQuery
  extends RequestQuery,
    Omit<QueryOptions<ProductModel>, 'filters' | 'search' | 'sort' | 'pagination'> {
  filters: string;
  search: string;
  sort: string;
  pagination: string;
}

class ProductController {
  getAllProducts = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await ProductService.getAllProducts()
    }).send(res);
  };

  getAllProductsByQueryOptions = async (
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
      metadata: await ProductService.getAllProductsByQueryOptions(req.query)
    }).send(res);
  };

  getAllProductsWithoutOptions = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await ProductService.getAllProductsWithoutOptions()
    }).send(res);
  };

  getViewestProduct = async (req: Request, res: Response, _next: NextFunction) => {
    const { limit } = req.params;
    new SuccessResponse({
      message: `Lấy ${limit} hàng hóa có lượt xem nhiều nhất thành công!`,
      metadata: await ProductService.getViewestProduct(Number(limit))
    }).send(res);
  };

  getProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: `Lấy hàng hóa ${id} thành công!`,
      metadata: await getProductById(Number(id))
    }).send(res);
  };

  getProductVariantValueByIdProduct = async (req: Request, res: Response, _next: NextFunction) => {
    const { productId } = req.params;
    new SuccessResponse({
      message: `Lấy biến thể hàng hóa bằng id sản phẩm :${productId}: thành công!`,
      metadata: await getProductVariantValueByIdProduct({ productId })
    }).send(res);
  };

  addNewProduct = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Thêm mới hàng hóa thành công!',
      metadata: await ProductService.addNewProduct(req.body)
    }).send(res);
  };

  addManyNewProduct = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Thêm mới nhiều hàng hóa thành công!',
      metadata: await ProductService.addManyNewProduct(req.body)
    }).send(res);
  };

  updateProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: `Cập nhật hàng hóa ${req.params.id} thành công!`,
      metadata: await ProductService.updateProductById(Number(id), req.body)
    }).send(res);
  };

  updatePartProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: `Cập nhật hàng hóa ${req.params.id} thành công!`,
      metadata: await ProductService.updatePartProductById(Number(id), req.body)
    }).send(res);
  };

  removeProductById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    new SuccessResponse({
      message: `Remove product ${req.params.id} success!`,
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
      message: `Delete product ${id} success!`,
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

  findAllProduct = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: `Find all product with query::${req.query.nameProd} success!`,
      metadata: await ProductService.findAllProductByQuery()
    }).send(res);
  };
}

export default new ProductController();
