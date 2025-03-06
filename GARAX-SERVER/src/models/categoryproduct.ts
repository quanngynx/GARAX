'use strict';
import { CategoryProduct, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type CategoryProductCreationAttributes = Optional<
CategoryProduct,
  'id'
>;

class CategoryProductModel
extends Model<CategoryProductCreationAttributes>
implements CategoryProduct {
  id!: string;
  name!: string;
  slug!: string;
  desc!: string;
  countProduct!: number;
  isParentCategory!: boolean;
  isActive!: boolean;
  imageId!: string;
  parentId!: string;
  created_at!: Date;
  updated_at!: Date;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export default (sequelize: Sequelize): typeof CategoryProductModel => {
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
