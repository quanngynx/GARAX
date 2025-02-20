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

  static async addVariantProduct(productId, data) {
    const getProductFromId = await getProductById({ id: productId })

    if(!getProductFromId) {
      throw new NotFoundError('Not found product from id!')
    }

    // Create variant from id


  }

  static async getProductById({ id }) {
    const proId = await Product.findByPk(id)

    if(!proId) throw new NotFoundError('error::get Product by _id')

    console.log("_id pro::", proId)
    console.log(proId instanceof Product);
    return proId
  }

  static async getAllProducts(options = {}) {
    const {
      fields,
      limit = 10,
      page = 1,
      filters = {},
      sortBy = 'createdAt',
      sortType = -1,
      getCategoryFilter = false,
      getBrandFilter = false,
      isShowHidden = false,
      populateCategory = true,
      populateBrand = true,
      fullTextSearch = false
    } = options;

    /**
     * @description Sort
     */
    const sortOtp = {};
    sortOtp[sortBy] = sortType;
    /**
     * @description Default status
     */

    /**
     * @description Query category and brand
     */
    const populateOpts = [];

    const countAll = await Product.count();

    const total = await Product.count({
      where: filters
    });

    const allProducts = await Product.findAll({
      where: filters,
      attributes: fields,
      include: populateOpts,
      offset: (page - 1) * limit,
      order: sortOtp,
      limit: limit,
      raw: true,
  });

    const allPro = await Product.findAll({});

    if(!allPro) throw new NotFoundError('error::find all Product')

    return allPro
  }

  static async getAllProductsWithoutOptions() {
    const allPro = await Product.findAll({});

    if(!allPro) throw new NotFoundError('error::find all Product')

    return allPro
  }

  static async getAllBestSellerProducts(options = {}) {
    const {
      fields,
      limit = 10,
      page = 1,
      filters = {},
      sortBy = 'createdAt',
      sortType = -1,
      getCategoryFilter = false,
      getBrandFilter = false,
      populateCategory = true,
      populateBrand = true,
      fullTextSearch = false
    } = options;

    return {
      result: 'See you later'
    }
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
