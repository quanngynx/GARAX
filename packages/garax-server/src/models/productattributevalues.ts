'use strict';
import { Models, ProductAttributeValues } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { AttributeValuesModel } from './attributevalues';
import { ProductModel } from './product';

export type ProductAttributeValuesCreationAttributes = Optional<
  ProductAttributeValues,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class ProductAttributeValuesModel extends Model<
  ProductAttributeValues,
  ProductAttributeValuesCreationAttributes
> {
  attribute_values?: AttributeValuesModel;

  public static associations: {
    productAttributeValue: Association<AttributeValuesModel, ProductAttributeValuesModel>; // 1-n
    product: Association<ProductModel, ProductAttributeValuesModel>; // 1-n
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'products'
    });

    this.belongsTo(models.AttributeValues, {
      foreignKey: 'attributeId',
      as: 'attribute_values'
    });
  }
}

export const productattributeValuesModel = (sequelize: Sequelize) => {
  ProductAttributeValuesModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING
      },
      productId: {
        type: DataTypes.INTEGER
      },
      attributeId: {
        type: DataTypes.INTEGER
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
      modelName: 'ProductAttributeValues',
      tableName: 'product_attribute_values',
      timestamps: true
    }
  );
  return ProductAttributeValuesModel;
};
export default productattributeValuesModel;
