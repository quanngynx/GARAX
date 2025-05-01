'use strict';
import { default as slugify } from 'slugify';

import {
  AddNewProductRequest,
  DeleteProductAttributesByIdRequest,
  DeleteProductVariantByIdRequest,
  FindAllProductByQueryRequest,
  GetAllProductsRequest
} from '@/common/requests/product';

import { db, ProductModel } from '@/models';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { getProductById } from '@/common/repositories';
import { generateSKU } from '@/common/utils';
import {
  attributeValuesOptionsQuery,
  categoryProductOptionsQuery,
  imageOptionsQuery,
  productAttributeValuesOptionsQuery,
  productOptionsQuery,
  productVariantValuesOptionsQuery,
  variantKeysOptionsQuery,
  variantValuesOptionsQuery
} from './queryOptions';
import { literal } from 'sequelize';
import {
  AddNewProductResponse,
  DeleteProductAttributesByIdResponse,
  DeleteProductVariantByIdResponse,
  FindAllProductByQueryResponse,
  GetAllProductsByQueryOptionsResponse,
  GetViewestProductResponse
} from '@/common/responses/product';

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
  }: AddNewProductRequest): Promise<AddNewProductResponse> {
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

      // console.log('variantData.variantCombination:', variantData.variantCombination);
      for (const value of variantData.variantCombination) {
        const variantValue = await db.VariantValues.findOne({
          where: {
            value
          },
          transaction
        });
        // console.log('variantValue::', variantValue);
        if (variantValue) {
          variantValueIds.push(variantValue.dataValues.id);
        }
      }

      // Create SKU: 'id1-id2-id3-...'
      const sku = generateSKU({
        categoryId,
        brandId,
        name,
        variantValuesId: variantValueIds
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
        key: variant.key,
        values: variant.values
      })),
      variantValues: createdVariantValues
    };
  }

  static async addManyNewProduct() {}

  static async addVariantProduct(
    productId: number
    // _data: any
  ) {
    const getProductFromId = await getProductById(productId);

    if (!getProductFromId) {
      throw new NotFoundError('Not found product from id!');
    }

    // Create variant from id
  }

  static async getAllProducts() {
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
   * @param options: GetAllProductsByQueryOptionsQueryState
   * @returns Promise: GetAllProductsByQueryOptionsResponse
   */
  static async getAllProductsByQueryOptions({
    filters,
    search,
    sort,
    pagination
  }: GetAllProductsRequest): Promise<GetAllProductsByQueryOptionsResponse> {
    const optionsParse = await productOptionsQuery.optionsParse({
      filters,
      search,
      sort,
      pagination
    });
    const response = productOptionsQuery.getList(optionsParse);
    return response;
  }

  static async getAllProductsWithoutOptions(): Promise<ProductModel[]> {
    const allPro = await db.Product.findAll({});

    if (!allPro) throw new NotFoundError('error::find all Product');

    return allPro;
  }

  static async getAllBestSellerProducts() {
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

  static async getViewestProduct(limit: number): Promise<GetViewestProductResponse> {
    const topViewedProducts = await db.Product.findAll({
      order: [['views', 'DESC']],
      limit: limit
    });

    return {
      limit: limit,
      result: topViewedProducts
    };
  }

  static async updateProductById(
    id: number
    // {}
  ) {
    return id;
  }

  static async updatePartProductById(
    id: number
    // {}
  ) {
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

  static async deleteProductAttributesById({
    id,
    attributeValuesIds
  }: DeleteProductAttributesByIdRequest): Promise<DeleteProductAttributesByIdResponse> {
    try {
      const deleteAttributeValuesProps = attributeValuesOptionsQuery.deleteMany(attributeValuesIds);
      const deleteProductAttributeValuesProps = productAttributeValuesOptionsQuery.deleteMany(id);
      return {
        resVariantProps: deleteAttributeValuesProps,
        resProductVariantProps: deleteProductAttributeValuesProps
      };
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }

  /**
   * @returns Promise<number> The number of destroyed rows
   */
  static async deleteProductVariantById({
    id,
    variantValuesIds
  }: DeleteProductVariantByIdRequest): Promise<DeleteProductVariantByIdResponse> {
    try {
      const deleteVariantProps = productVariantValuesOptionsQuery.deleteMany(variantValuesIds);
      const deleteProductVariantProps = variantValuesOptionsQuery.deleteMany(id);
      return {
        resVariantProps: deleteVariantProps,
        resProductVariantProps: deleteProductVariantProps
      };
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }

  static async deleteAllProduct(confirm: boolean) {
    const transaction = await db.sequelize.transaction();
    try {
      if (confirm) {
        const deleteCategoryProduct = await categoryProductOptionsQuery.deleteAll(true, transaction);

        const deleteImage = await imageOptionsQuery.deleteAll(true, transaction);

        const getAllVariantValues = await db.VariantValues.findAll({
          attributes: ['variantKeyId'],
          transaction
        });

        const variantKeyIds = getAllVariantValues.map((v) => v.dataValues.variantKeyId);
        const deleteVariantKeys = variantKeysOptionsQuery.deleteMany(variantKeyIds, transaction);

        const deleteVariantValues = await variantValuesOptionsQuery.deleteAll(true, transaction);

        const deleteProduct = await productOptionsQuery.deleteAll(true, transaction);

        return {
          categoryProduct: deleteCategoryProduct,
          image: deleteImage,
          variantKeys: deleteVariantKeys,
          variantValues: deleteVariantValues,
          product: deleteProduct
        };
      }

      await transaction.commit();

      return null;
    } catch (error) {
      await transaction.rollback();
      throw new InternalServerError(`Error delete all product:: ${error}`);
    }
  }

  static async findAllProductPublishByQuery() {}

  static async findAllProductUnpublishByQuery() {}

  static async findAllProductByQuery({
    keyword,
    limit = 10,
    offset = 0
  }: FindAllProductByQueryRequest): Promise<FindAllProductByQueryResponse | null> {
    const safeKeyword = db.sequelize.escape(keyword);
    const fullTextCondition = literal(`MATCH(name, slug) AGAINST('${safeKeyword}' IN NATURAL LANGUAGE MODE)`);
    const result = await db.Product.findAndCountAll({
      where: fullTextCondition,
      attributes: {
        include: [[literal(`MATCH(name, slug) AGAINST(${safeKeyword} IN NATURAL LANGUAGE MODE)`), 'relevance']]
      },
      order: [[literal('relevance'), 'DESC']],
      limit,
      offset,
      // distinct: true,
      nest: true
    });

    if (result.count === 0) {
      return null;
    }
    return result;
  }
}
