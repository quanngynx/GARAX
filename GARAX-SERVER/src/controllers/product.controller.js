
const { SuccessResponse, CREATED } = require('../middlewares/success.response')
const ProductService = require("../services/product.service")

class ProductController {
  getAllProducts = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await ProductService.getAllProducts()
    }).send(res)
  }

  getProductById = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get product by id success!',
      metadata: await ProductService.getProductById(req.params)
    }).send(res)
  }

  addNewProduct = async (req, res, next) => {
    new SuccessResponse({
      message: 'Add new product success!',
      metadata: await ProductService.addNewProduct(req.body)
    }).send(res)
  }

  updateProductById = async (req, res, next) => {
    new SuccessResponse({
      message: 'Update product success!',
      metadata: await ProductService.updateProductById(req.params, req.body)
    }).send(res)
  }

  updatePartProductById = async (req, res, next) => {
    new SuccessResponse({
      message: 'Update {} in product success!',
      metadata: await ProductService.updatePartProductById(req.params, req.body)
    }).send(res)
  }

  removeProductById = async (req, res, next) => {
    new SuccessResponse({
      message: 'Remove product success!',
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
      message: 'Delete product success!',
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
      message: 'Find all product success!',
      metadata: await ProductService.findAllProduct(req.query)
    }).send(res)
  }
}

module.exports = new ProductController()
