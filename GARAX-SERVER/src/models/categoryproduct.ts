'use strict';
import { CategoryProduct, Models } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type CategoryProductCreationAttributes = Optional<
  CategoryProduct,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy' | 'categoryId'
>;

export class CategoryProductModel extends Model<CategoryProductCreationAttributes> {
  public static associations: {
    categoryProduct: Association<CategoryProductModel, CategoryProductModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.hasMany(models.CategoryProduct, {
      foreignKey: 'parentId',
      as: 'category_products'
    });

    this.belongsTo(models.CategoryProduct, {
      foreignKey: 'parentId',
      as: 'category_product'
    });
  }
}

export const categoryProductModel = (sequelize: Sequelize) => {
  CategoryProductModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.INTEGER
      },
      parentId: {
        type: DataTypes.INTEGER
      },
      categoryId: {
        type: DataTypes.INTEGER
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: ''
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
      modelName: 'CategoryProduct',
      tableName: 'category_products',
      timestamps: true
    }
  );
  return CategoryProductModel;
};
export default categoryProductModel;
