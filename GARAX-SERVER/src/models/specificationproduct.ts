'use strict';
import { Models, SpecificationProduct } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type SpecificationProductCreationAttributes = Optional<
  SpecificationProduct,
  'id'
>;

export class SpecificationProductModel
extends Model<SpecificationProduct, SpecificationProductCreationAttributes>
implements SpecificationProduct {
  public id!: string;
  public name!: string;
  public key!: string;
  public value!: string;
  public isOriginalProduct!: boolean;
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

export const specificationProductModel = (sequelize: Sequelize) => {
  SpecificationProductModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING
    },
    key: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.STRING
    },
    isOriginalProduct: {
      type: DataTypes.BOOLEAN
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
    modelName: 'SpecificationProduct',
    tableName: 'specification_products',
    timestamps: true
  });
  return SpecificationProductModel;
};
