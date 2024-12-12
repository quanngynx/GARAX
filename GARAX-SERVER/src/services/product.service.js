"use strict";

const { Product } = require('../models')

const { BadRequestError, NotFoundError } = require('../middlewares/error.response');
// const { all } = require('../routes/v1/products');
class ProductService {
  static async addNewProduct({
    nameProduct,
    quantity,
    thumble,
    originalPrice,
    idCartItemsProduct = null,
    idBrand = null,
    status = 'publish'
  }) {

    console.log({nameProduct, quantity, thumble})
    const newProduct = await Product.create({
      nameProduct: nameProduct,
      quantity: quantity,
      thumble: thumble,
      originalPrice: originalPrice,
      idCartItemsProduct: idCartItemsProduct,
      idBrand: idBrand,
      status: status
    });

    if(!newProduct) throw new BadRequestError('error::create new Product')

    return newProduct
  }

  static async getProductById({ id }) {
    const proId = await Product.findByPk(id)

    if(!proId) throw new NotFoundError('error::get Product by _id')

    console.log("_id pro::", proId)
    console.log(proId instanceof Product);
    return proId
  }

  static async getAllProducts() {
    const allPro = await Product.findAll({});

    if(!allPro) throw new NotFoundError('error::find all Product')

    return allPro
  }

  static async updateProductById({ _id }) {

  }

  static async updatePartProductById({ _id }, {}) {

  }

  static async removeProductById() {

  }

  static async removeAllProduct() {

  }

  static async deleteProductById() {

  }

  static async deleteAllProduct() {

  }

  static async findAllProductPublishByQuery() {

  }

  static async findAllProductUnpublishByQuery() {

  }

  static async findAllProductByQuery() {

  }
}

module.exports = ProductService
