
const { SuccessResponse, CREATED } = require('../middlewares/success.response')
const ProductCategoryService = require("../services/productCategory.service")

class ProductCategoryController {
  addNewCategory = async (req, res, next) => {
    console.log("body::",req.body)
    new SuccessResponse({
      message: 'Add new product category success!',
      metadata: await ProductCategoryService.addNewCategory(req.body)
    }).send(res)
  }

  getAllCategory = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get all product category success!',
      metadata: await ProductCategoryService.getAllCategory(req.body)
    }).send(res)
  }

  updateTitleCategory = async (req, res, next) => {
    new SuccessResponse({
      message: 'Update title - product category success!',
      metadata: await ProductCategoryService.updateTitleCategory(req.params)
    }).send(res)
  }

  deleteTitleCategoryByTitle = async (req, res, next) => {
    new SuccessResponse({
      message: 'Delete product category by title success!',
      metadata: await ProductCategoryService.deleteTitleCategoryByTitle(req.params)
    }).send(res)
  }

  deleteAllTitleCategory = async (req, res, next) => {
    new SuccessResponse({
      message: 'Delete all product category success!',
      metadata: await ProductCategoryService.deleteAllTitleCategory(req.body)
    }).send(res)
  }
}

module.exports = new ProductCategoryController()
