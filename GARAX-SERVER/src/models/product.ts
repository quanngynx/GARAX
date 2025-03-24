'use strict';
// import { PRODUCT_TAG, PRODUCT_STATUS } from '@/common/constants';
import { Models, Product } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';

// import { default as slugify } from "slugify";
import { ProductVariantValuesModel } from './productvariantvalues';
import { CategoryProductModel } from './categoryproduct';
import { ImageModel } from './image';
import { VideoModel } from './video';
import { ProductAttributeValuesModel } from './productattributevalues';
import { PRODUCT_STATUS, PRODUCT_TAG } from '@/common/constants';

export type ProductCreationAttributes = Optional<
  Product,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'createdBy'
  | 'updatedBy'
  | 'slug'
  | 'subCategoryId'
  | 'sub2CategoryId'
  | 'sub3CategoryId'
>;

export class ProductModel extends Model<Product, ProductCreationAttributes> {
  public id!: number;
  public name!: string;
  public slug!: string;
  public totalStock!: number;
  public desc!: JSON;
  public views!: number;
  public tags!: PRODUCT_TAG;
  public manufacturingDate!: bigint;
  public minPrice!: number;
  public maxPrice!: number;
  public rate!: number;
  public totalRate!: number;
  public totalSold!: number;
  public categoryId!: number;
  public subCategoryId!: number;
  public sub2CategoryId!: number;
  public sub3CategoryId!: number;
  public videoId!: number;
  public brandId!: number;
  public status!: PRODUCT_STATUS;
  public createdBy!: string;
  public updatedBy!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    productVariantValues: Association<ProductModel, ProductVariantValuesModel>;
    categoryProduct: Association<ProductModel, CategoryProductModel>;
    image: Association<ProductModel, ImageModel>;
    video: Association<ProductModel, VideoModel>;
    productAttributeValues: Association<ProductModel, ProductAttributeValuesModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.hasMany(models.ProductVariantValues, {
      foreignKey: 'productId',
      as: 'product_variant_values'
    });

    this.hasOne(models.CategoryProduct, {
      foreignKey: 'categoryId',
      as: 'category_products'
    });

    this.hasMany(models.Image, {
      foreignKey: 'productId',
      as: 'images'
    });

    this.hasOne(models.Video, {
      foreignKey: 'videoId',
      as: 'videos'
    });

    this.hasMany(models.ProductAttributeValues, {
      foreignKey: 'productId',
      as: 'product_attribute_values'
    });
  }
}

export const productModel = (sequelize: Sequelize) => {
  ProductModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
      slug: {
        type: DataTypes.STRING
      },
      desc: {
        type: DataTypes.JSON
      },
      views: {
        type: DataTypes.INTEGER
      },
      tags: {
        type: DataTypes.ENUM('test'),
        defaultValue: 'test'
      },
      manufacturingDate: {
        type: DataTypes.BIGINT
      },
      minPrice: {
        type: DataTypes.INTEGER
      },
      maxPrice: {
        type: DataTypes.INTEGER
      },
      rate: {
        type: DataTypes.FLOAT
      },
      totalRate: {
        type: DataTypes.INTEGER
      },
      totalSold: {
        type: DataTypes.INTEGER
      },
      categoryId: {
        type: DataTypes.INTEGER
      },
      subCategoryId: {
        type: DataTypes.INTEGER
      },
      sub2CategoryId: {
        type: DataTypes.INTEGER
      },
      sub3CategoryId: {
        type: DataTypes.INTEGER
      },
      videoId: {
        type: DataTypes.INTEGER
      },
      brandId: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.ENUM('publish', 'draft'),
        defaultValue: 'publish'
      },
      createdBy: {
        type: DataTypes.STRING
      },
      updatedBy: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: true
      // hooks: {
      //   beforeValidate: (product) => {
      //     product.slug = slugify(product.name, { lower: true, trim: true });
      //   },
      // },
    }
  );
  return ProductModel;
};
