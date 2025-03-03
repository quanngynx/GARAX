
import { SuccessResponse, CREATED } from '../middlewares/success.response'
import ProductService from "../services/product.service"

class ProductController {
  getAllProducts = async (req, res, next) => {
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await ProductService.getAllProducts()
    }).send(res)
  }

  getAllProductsWithoutOptions = async (req, res, next) => {
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await ProductService.getAllProductsWithoutOptions()
    }).send(res)
  }

  getProductById = async (req, res, next) => {
    new SuccessResponse({
      message: 'Lấy hàng hóa bằng id thành công!',
      metadata: await ProductService.getProductById(req.params)
    }).send(res)
  }

  addNewProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Thêm mới hàng hóa thành công!',
      metadata: await ProductService.addNewProduct(req.body)
    }).send(res)
  }



  updateProductById = async (req, res, next) => {
    new SuccessResponse({
      message: `Cập nhật hàng hóa ${req.params._id} thành công!`,
      metadata: await ProductService.updateProductById(req.params, req.body)
    }).send(res)
  }

  updatePartProductById = async (req, res, next) => {
    new SuccessResponse({
      message: `Cập nhật hàng hóa ${req.params._id} thành công!`,
      metadata: await ProductService.updatePartProductById(req.params, req.body)
    }).send(res)
  }

  removeProductById = async (req, res, next) => {
    new SuccessResponse({
      message: `Remove product ${req.params._id} success!`,
      metadata: await ProductService.removeProductById(req.params)
    }).send(res)
  }

  removeAllProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Remove all product success!',
      metadata: await ProductService.removeAllProduct()
    }).send(res)
  }

  deleteProductById = async (req, res, next) => {
    new SuccessResponse({
      message: `Delete product ${req.params._id} success!`,
      metadata: await ProductService.deleteProductById(req.params)
    }).send(res)
  }

  deleteAllProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Delete all product success!',
      metadata: await ProductService.deleteAllProduct()
    }).send(res)
  }

  findAllProductPub = async (req, res, next) => {
    new SuccessResponse({
      message: 'Find all public product success!',
      metadata: await ProductService.findAllProductPub(req.params, req.query)
    }).send(res)
  }

  findAllProduct = async (req, res, next) => {
    new SuccessResponse({
      message: `Find all product with query::${req.query.nameProd} success!`,
      metadata: await ProductService.findAllProduct(req.query)
    }).send(res)
  }
}

module.exports = new ProductController()
