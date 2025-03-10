"use strict";

import { AddNewProductRequest, GetAllBestSellerProducts } from "@/common/requests/product";
import { db } from "@/models";
import { BadRequestError, NotFoundError } from '../middlewares/error.response';
import { getProductById } from "@/common/repositories";

export class ProductService {
  static async addNewProduct({
    name,
    totalStock,
    desc,
    views,
    tags,
    manufacturingDate,
    minPrice,
    maxPrice,
    rate,
    totalRate,
    totalSold,
    categoryId,
    subCategoryId,
    sub2CategoryId,
    sub3CategoryId,
    videoId,
    brandId,
    status,
    createBy,
    updateBy,
  } : AddNewProductRequest) {

    console.log({});
    const calTotalStock = totalStock;
    const newProduct = await db.Product.create({
      name: name,
      totalStock: calTotalStock,
      desc: desc,
      views: views,
      tags: tags,
      manufacturingDate: manufacturingDate,
      minPrice: minPrice,
      maxPrice: maxPrice,
      rate: rate,
      totalRate: totalRate,
      totalSold: totalSold,
      categoryId: categoryId,
      subCategoryId: subCategoryId,
      sub2CategoryId: sub2CategoryId,
      sub3CategoryId: sub3CategoryId,
      videoId: videoId,
      brandId: brandId,
      status: status,
      createBy: createBy,
      updateBy: updateBy,
    });

    if(!newProduct) throw new BadRequestError('error::create new Product')

    return newProduct
  }

  static async addVariantProduct(
    productId: string,
    _data: any
  ) {
    const getProductFromId = await getProductById({ id: productId })

    if(!getProductFromId) {
      throw new NotFoundError('Not found product from id!')
    }

    // Create variant from id

  }

  static async getAllProducts(
    _options = {}
  ) {
    // const {
    //   fields,
    //   limit = 10,
    //   page = 1,
    //   filters = {},
    //   sortBy = 'createdAt',
    //   sortType = -1,
    //   getCategoryFilter = false,
    //   getBrandFilter = false,
    //   isShowHidden = false,
    //   populateCategory = true,
    //   populateBrand = true,
    //   fullTextSearch = false
    // } = options;

    /**
     * @description Sort
     */
    // const sortOtp = undefined;
    // sortOtp[sortBy] = sortType;
    /**
     * @description Default status
     */

    /**
     * @description Query category and brand
     */
    // const populateOpts: never[] = [];

    // const countAll = await db.Product.count();

    // const total = await db.Product.count({
    //   where: filters
    // });

  //   const allProducts = await db.Product.findAll({
  //     where: filters,
  //     attributes: fields,
  //     include: populateOpts,
  //     offset: (page - 1) * limit,
  //     // order: sortOtp,
  //     limit: limit,
  //     raw: true,
  // });

    const allPro = await db.Product.findAll({});

    if(!allPro) throw new NotFoundError('error::find all Product')

    return allPro
  }

  static async getAllProductsWithoutOptions() {
    const allPro = await db.Product.findAll({});

    if(!allPro) throw new NotFoundError('error::find all Product')

    return allPro
  }

  static async getAllBestSellerProducts(
    _options: GetAllBestSellerProducts = {}
  ) {
    // const {
    //   fields,
    //   limit = 10,
    //   page = 1,
    //   filters = {},
    //   sortBy = 'createdAt',
    //   sortType = -1,
    //   getCategoryFilter = false,
    //   getBrandFilter = false,
    //   populateCategory = true,
    //   populateBrand = true,
    //   fullTextSearch = false
    // } = options;

    return {
      result: 'See you later'
    }
  }

  static async updateProductById(id: string, {}) {
    return id
  }

  static async updatePartProductById(id: string, {}) {
    return id
  }

  static async removeProductById(id: string) {
    return id
  }

  static async removeAllProduct() {

  }

  static async deleteProductById(id: string) {
    return id
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
