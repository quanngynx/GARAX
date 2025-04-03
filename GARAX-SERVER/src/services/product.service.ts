/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
'use strict';
import { default as slugify } from 'slugify';

import {
  AddManyNewProductRequest,
  AddNewProductRequest,
  GetAllBestSellerProducts,
  GetAllProductsByQueryOptions
} from '@/common/requests/product';

import { db, ProductModel } from '@/models';
import { BadRequestError, NotFoundError } from '@/middlewares';
import { getProductById } from '@/common/repositories';
import { generateSKU, jsonUtils } from '@/common/utils';
import { QueryOptionsByBuilder } from './queryOptions';

const productOptionsQuery = new QueryOptionsByBuilder<ProductModel>(ProductModel);

export class ProductService {
  static async addNewProduct({
    name,
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
    sub3CategoryId, // props option
    videoId,
    brandId,
    status,
    createdBy,
    updatedBy = '',
    attributes = [],
    variants = [],
    variantValues = []
  }: AddNewProductRequest) {
    /**
     * 1. Check categoryId & brandId?
     */
    const isCategory = await db.CategoryProduct.findByPk(categoryId);
    if (!isCategory) {
      throw new NotFoundError(`Category id:${categoryId} không tồn tại!`);
    }

    const isBrand = await db.Brand.findByPk(brandId);
    if (!isBrand) {
      throw new NotFoundError(`Brand id:${brandId} không tồn tại!`);
    }

    /**
     * 2. Init transaction
     */
    const transaction = await db.sequelize.transaction();

    /**
     * 3. Check name's product
     */
    const isProduct = await db.Product.findOne({
      where: {
        name: name
      }
    });
    if (isProduct) {
      throw new BadRequestError(`Sản phẩm::${name} đã tồn tại!`);
    }

    /**
     * 4. INSERT PRODUCT ->
     * I. name, categoryId, brandId, ..., manufacturingDate, tags, minPrice, maxPrice
     */
    const calAvgRate = rate;
    const countRate = totalRate;
    const newProduct = await db.Product.create(
      {
        name: name,
        slug: slugify(name, { lower: true, trim: true }),
        desc: desc,
        views: views,
        tags: tags,
        manufacturingDate: manufacturingDate,
        minPrice: minPrice,
        maxPrice: maxPrice,
        rate: calAvgRate,
        totalRate: countRate,
        totalSold: totalSold,
        categoryId: categoryId,
        subCategoryId: subCategoryId,
        sub2CategoryId: sub2CategoryId,
        sub3CategoryId: sub3CategoryId,
        videoId: videoId,
        brandId: brandId,
        status: status,
        createdBy: createdBy,
        updatedBy: updatedBy
      },
      {
        transaction
      }
    );

    /**
     * 5. Handle attribute
     */
    const createAttributes = [];
    for (const attributeData of attributes) {
      const [attribute] = await db.AttributeValues.findOrCreate({
        where: {
          name: attributeData.key
        },
        transaction
      });

      await db.ProductAttributeValues.create(
        {
          productId: newProduct.dataValues.id,
          attributeId: attribute.dataValues.id,
          value: attributeData.value
        },
        {
          transaction
        }
      );

      createAttributes.push({
        name: attribute.dataValues.name,
        value: attributeData.value
      });
    }

    /**
     * 6. Handle variants
     */
    for (const variant of variants) {
      const [variantEntry] = await db.VariantKeys.findOrCreate({
        where: { key: variant.key },
        transaction
      });

      const variantKeyId = variantEntry.dataValues?.id || variantEntry.dataValues.id;

      for (const value of variant.values) {
        await db.VariantValues.findOrCreate({
          where: {
            value,
            variantKeyId: variantKeyId
          },
          transaction
        });
      }
    }

    /**
     * 7. Handle variant_values
     */
    // console.log('variantData.variantCombination:', variantValues)
    const createdVariantValues = [];
    for (const variantData of variantValues) {
      const variantValueIds = [];

      // console.log('variantData.variantCombination:', variantData.variantCombination)
      for (const value of variantData.variantCombination) {
        const variantValue = await db.VariantValues.findOne({
          where: {
            value
          },
          transaction
        });

        if (variantValue) {
          variantValueIds.push(variantValue.dataValues.id);
        }
      }

      // Create SKU: 'id1-id2-id3-...'
      const sku = generateSKU({
        categoryId,
        brandId,
        name,
        variants
      });

      const createdVariant = await db.ProductVariantValues.create(
        {
          productId: newProduct.dataValues.id,
          price: variantData.price,
          oldPrice: variantData.oldPrice,
          stock: variantData.stock || 0,
          sold: 0,
          sku: sku,
          manufacturingDate: manufacturingDate,
          productVariantId: 1,
          addOverDetailSpecsId: 1
        },
        {
          transaction
        }
      );

      createdVariantValues.push({
        sku: sku,
        price: createdVariant.dataValues.price,
        oldPrice: createdVariant.dataValues.oldPrice,
        stock: createdVariant.dataValues.stock
      });
    }

    await transaction.commit();

    if (!newProduct) throw new BadRequestError('error::create new product');

    return {
      ...newProduct.get({ plain: true }),
      attributes: createAttributes,
      variants: variants.map((variant) => ({
        name: variant.key,
        values: variant.values
      })),
      variantValues: createdVariantValues
    };
  }

  static async addManyNewProduct({}: AddManyNewProductRequest) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async addVariantProduct(productId: number, _data: any) {
    const getProductFromId = await getProductById(productId);

    if (!getProductFromId) {
      throw new NotFoundError('Not found product from id!');
    }

    // Create variant from id
  }

  static async getAllProducts(_options = {}) {
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

    if (!allPro) throw new NotFoundError('error::find all Product');

    return allPro;
  }

  /**
   * @refference: https://sequelize.org/docs/v6/other-topics/typescript/#utility-types
   * @param options: GetAllProductsByQueryOptions
   * @returns {Promise<{
   *   rows: Promise<ProductModel[]>;
   *   totalPage: {};
   *   totalRows: number;
   * }>}
   */
  static async getAllProductsByQueryOptions({
    filters,
    search,
    sort,
    pagination
  }: {
    filters: string;
    search: string;
    sort: string;
    pagination: string;
  }) {
    const filtersParse = jsonUtils.jsonParse(filters, {});
    const searchParse = jsonUtils.jsonParse(search, {});
    const sortParse = jsonUtils.jsonParse(sort, {});
    const paginationParse = jsonUtils.jsonParse(pagination, {});
    // console.log('\nfilters::', filtersParse);
    // console.log('search::', searchParse);
    // console.log('sort::', sortParse);
    // console.log('pagination::', paginationParse);
    const response = productOptionsQuery.getList({
      filters: filtersParse,
      search: searchParse,
      sort: sortParse,
      pagination: paginationParse
    });
    return response;
  }

  static async getAllProductsWithoutOptions() {
    const allPro = await db.Product.findAll({});

    if (!allPro) throw new NotFoundError('error::find all Product');

    return allPro;
  }

  static async getAllBestSellerProducts(_options: GetAllBestSellerProducts = {}) {
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
    };
  }

  static async getViewestProduct(limit: number) {
    const topViewedProducts = await db.Product.findAll({
      order: [['views', 'DESC']],
      limit: limit
    });

    return {
      limit: limit,
      result: {
        topViewedProducts
      }
    };
  }

  static async updateProductById(id: number, {}) {
    return id;
  }

  static async updatePartProductById(id: number, {}) {
    return id;
  }

  static async removeProductById(id: number) {
    return id;
  }

  static async removeAllProduct() {}

  static async deleteProductById(id: number) {
    /**
     * 1. Init transaction | product -> attribute -> variantKeys -> variantValues -> productVariantValues
     */
    // const transaction = await db.sequelize.transaction();

    /**
     * 2. productVariantValues
     */

    /**
     * 3. variantValues
     */

    /**
     * 4. variantKeys
     */

    /**
     * 5. productAttributeValues
     */

    /**
     * 5. attributeValues
     */

    // const isProductExistInOrder = await db.CartItems.findOne({
    //   where: {
    //     productVariantId: id
    //   },
    //   include: [{
    //     model: db.Cart,
    //     required: true,
    //     include: [
    //       {
    //         model: db.Order,
    //         required: true, // Chỉ lấy nếu có Order
    //         where: { id: orderId },
    //       },
    //     ],
    //   }]
    // });

    return id;
  }

  static async deleteAllProduct() {}

  static async findAllProductPublishByQuery() {}

  static async findAllProductUnpublishByQuery() {}

  static async findAllProductByQuery() {}
}
