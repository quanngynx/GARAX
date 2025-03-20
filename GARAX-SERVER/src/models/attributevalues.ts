'use strict';
import { Models, AttributeValues } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ProductAttributeValuesModel } from './productattributevalues';

export type AttributeValuesCreationAttributes = Optional<
  AttributeValues,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class AttributeValuesModel
extends Model<AttributeValues, AttributeValuesCreationAttributes> {
  public id!: string;
  public name!: string;
  // public variantKeyId: number;
  // public createBy!: Date;
  // public updateBy!: Date;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public static associations: {
    productAttributeValues: Association<AttributeValuesModel, ProductAttributeValuesModel>; // 1-n
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.hasMany(models.ProductAttributeValues, {
      foreignKey: 'attributeId',
      as: 'product_attribute_values',
    });
  }
}

export const attributeValuesModel = (sequelize: Sequelize) => {
  AttributeValuesModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
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
  }, {
    sequelize,
    modelName: 'AttributeValues',
    tableName: 'attribute_values',
    timestamps: true
  });
  return AttributeValuesModel;
};
