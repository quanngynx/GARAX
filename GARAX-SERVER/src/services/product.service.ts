"use strict";

import { AddManyNewProductRequest, AddNewProductRequest, GetAllBestSellerProducts } from "@/common/requests/product";
import { db } from "@/models";
import { BadRequestError, NotFoundError } from '../middlewares/error.response';
import { getProductById } from "@/common/repositories";

export class ProductService {
  static async addNewProduct({
    name, totalStock, desc,
    views, tags, manufacturingDate,
    minPrice, maxPrice, rate,
    totalRate, totalSold, categoryId,
    subCategoryId, sub2CategoryId, sub3CategoryId, // props option
    videoId, brandId, status,
    createBy, updateBy = '',
    attributes = [],
    variants = [],
    variantValues = []
  } : AddNewProductRequest) {
    // console.log({});
    /**
     * 1. Check categoryId & brandId?
     */
    const isCategory = await db.CategoryProduct.findByPk(categoryId);
    if(!isCategory) {
      throw new NotFoundError(`Category id:${categoryId} không tồn tại!`);
    }

    const isBrand = await db.Brand.findByPk(categoryId);
    if(!isBrand) {
      throw new NotFoundError(`Brand id:${categoryId} không tồn tại!`);
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
    })
    if(isProduct) {
      throw new BadRequestError(`Sản phẩm::${name} đã tồn tại!`)
    }

    /**
     * 4. INSERT PRODUCT ->
     * I. name, categoryId, brandId, ..., manufacturingDate, tags, minPrice, maxPrice
     */
    const calTotalStock = totalStock;
    const calAvgRate = rate;
    const countRate = totalRate;
    const newProduct = await db.Product.create({
      name: name,
      totalStock: calTotalStock,
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
      createBy: createBy,
      updateBy: updateBy,
    },  {
      transaction
    });

    /**
     * 5. Handle attribute
     */
    const createAttributes = [];
    for(const attributeData of attributes) {
      const [attribute] = await db.AttributeValues.findOrCreate({
        where: {
          name: attributeData.key
        },
        transaction
      });

      await db.ProductAttributeValues.create({
        productId: newProduct.id,
        attributeId: attribute.id,
        value: attributeData.value,
      }, {
        transaction
      });

      createAttributes.push({
        name: attribute.name,
        value: attributeData.value
      });
    };

    /**
     * 6. Handle variants
     */
    for(const variant of variants) {
      const[variantEntry] = await db.VariantKeys.findOrCreate({
        where: {
          key: variant.key
        },
        transaction
      });

      for(const value of variant.values) {
        await db.VariantValues.findOrCreate({
          where: {
            value,
            variantKeyId: variantEntry.id
          },
          transaction
        })
      }
    }

    /**
     * 7. Handle variant_values
     */
    const createdVariantValues = [];
    for(const variantData of variantValues) {
      const variantValueIds = [];

      for(const value of variantData.variantCombination) {
        const variantValue = await db.VariantValues.findOne({
          where: {
            value
          },
          transaction
        });

        if(variantValue) { variantValueIds.push(variantValue.id) }
      }

      // Create SKU: 'id1-id2-id3-...'
      const sku = variantValueIds
      .map(id => Number(id))
      .sort((a , b) => a - b )
      .join('-');

      const createdVariant = await db.ProductVariantValues.create({
        productId: newProduct.id,
        price: variantData.price,
        oldPrice: variantData.oldPrice,
        stock: variantData.stock || 0,
        sold: 0,
        sku: sku,
        manufacturingDate: manufacturingDate,
        addOverSpecsId: "",
        addOverDetailSpecsId: ""
      }, {
        transaction
      });

      createdVariantValues.push({
        sku: sku,
        price: createdVariant.price,
        oldPrice: createdVariant.oldPrice,
        stock: createdVariant.stock
      });
    }

    await transaction.commit();

    // if(!newProduct) throw new BadRequestError('error::create new product')

    return {
      data: {
        ...newProduct.get({ plain: true }),
        attributes: createAttributes,
        variants: variants.map(variant => ({
          name: variant.key,
          values: variant.values
        })),
        variantValues: createdVariantValues
      },
    }
  }

  static async addManyNewProduct({} : AddManyNewProductRequest) {}

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

  static async deleteProductById({ id } : { id: string }) {
    const isProductExistInOrder = await db.Order.findOne({
      where: {
        // pro
      }
    })
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
