'use strict';
// import { PRODUCT_TAG, PRODUCT_STATUS } from '@/common/constants';
import { Models, Product } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from "slugify";

export type ProductCreationAttributes = Optional<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'slug'
>;

export class ProductModel
extends Model<Product, ProductCreationAttributes> {
  // public id!: string;
  public name!: string;
  public slug!: string;
  // public totalStock!: number;
  // public desc!: JSON;
  // public views!: number;
  // public tags!: PRODUCT_TAG;
  // public manufacturingDate!: BigInt;
  // public minPrice!: number;
  // public maxPrice!: number;
  // public rate!: number;
  // public totalRate!: number;
  // public totalSold!: number;
  // public categoryId!: string;
  // public subCategoryId!: string;
  // public sub2CategoryId!: string;
  // public sub3CategoryId!: string;
  // public videoId!: string;
  // public brandId!: string;
  // public status!: PRODUCT_STATUS;
  // public createBy!: string;
  // public updateBy!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export const productModel = (sequelize: Sequelize) => {
  ProductModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    totalStock: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.JSON,
    },
    views: {
      type: DataTypes.INTEGER,
    },
    tags: {
      type: DataTypes.ENUM('test'),
      defaultValue: 'test'
    },
    manufacturingDate: {
      type: DataTypes.BIGINT,
    },
    minPrice: {
      type: DataTypes.INTEGER,
    },
    maxPrice: {
      type: DataTypes.INTEGER,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
    totalRate: {
      type: DataTypes.INTEGER
    },
    totalSold: {
      type: DataTypes.INTEGER
    },
    categoryId: {
      type: DataTypes.STRING,
    },
    subCategoryId: {
      type: DataTypes.STRING,
    },
    sub2CategoryId: {
      type: DataTypes.STRING,
    },
    sub3CategoryId: {
      type: DataTypes.STRING,
    },
    videoId: {
      type: DataTypes.STRING,
    },
    brandId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('publish', 'draft'),
      defaultValue: 'publish'
    },
    createBy: {
      type: DataTypes.STRING,
    },
    updateBy: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    hooks: {
      beforeValidate: (product) => {
        product.slug = slugify(product.name, { lower: true, trim: true });
      },
    },
  });
  return ProductModel;
};


