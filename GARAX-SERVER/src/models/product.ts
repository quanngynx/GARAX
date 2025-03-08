'use strict';
import { PRODUCT_TAG, PRODUCT_STATUS } from '@/common/constants';
import { Models, Product } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from "slugify";

export type ProductCreationAttributes = Optional<
  Product,
  'id'
>;

export class ProductModel
extends Model<Product, ProductCreationAttributes>
implements Product {
  public id!: string;
  public name!: string;
  public slug!: string;
  public desc!: JSON;
  public views!: number;
  public tags!: PRODUCT_TAG;
  public manufacturingDate!: BigInt;
  public minPrice!: number;
  public maxPrice!: number;
  public categoryId!: string;
  public subCategoryId!: string;
  public sub2CategoryId!: string;
  public sub3CategoryId!: string;
  public videoId!: string;
  public brandId!: string;
  public status!: PRODUCT_STATUS;
  public createBy!: string;
  public updateBy!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

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
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    desc: DataTypes.JSON,
    views: DataTypes.INTEGER,
    tags: {
      type: DataTypes.ENUM('test'),
      defaultValue: 'test'
    },
    manufacturingDate: DataTypes.BIGINT,
    minPrice: DataTypes.INTEGER,
    maxPrice: DataTypes.INTEGER,
    categoryId: DataTypes.STRING,
    subCategoryId: DataTypes.STRING,
    sub2CategoryId: DataTypes.STRING,
    sub3CategoryId: DataTypes.STRING,
    videoId: DataTypes.STRING,
    brandId: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('publish', 'draft'),
      defaultValue: 'publish'
    },
    createBy: DataTypes.STRING,
    updateBy: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
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


