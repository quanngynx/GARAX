'use strict';
import { CategoryProduct, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type CategoryProductCreationAttributes = Optional<
CategoryProduct,
  'id' | 'created_at' | 'updated_at'
>;

class CategoryProductModel
extends Model<CategoryProductCreationAttributes>
implements CategoryProduct {
  public id!: string;
  public name!: string;
  public slug!: string;
  public desc!: string;
  public countProduct!: number;
  public isParentCategory!: boolean;
  public isActive!: boolean;
  public imageId!: string;
  public parentId!: string;
  public created_at!: Date;
  public updated_at!: Date;

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

export const categoryProductModel = (sequelize: Sequelize) => {
  CategoryProductModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    desc: {
      type: DataTypes.JSON
    },
    countProduct: {
      type: DataTypes.INTEGER
    },
    isParentCategory: {
      type: DataTypes.BOOLEAN
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },
    imageId: {
      type: DataTypes.STRING
    },
    parentId: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'CategoryProduct',
    tableName: 'category_products',
     timestamps: true
  });
  return CategoryProductModel;
};
