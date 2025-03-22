'use strict';
import { Models, SpecificationDetailProduct } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type SpecificationDetailProductCreationAttributes = Optional<
  SpecificationDetailProduct,
  'id'
>;

export class SpecificationDetailProductModel
extends Model<SpecificationDetailProduct, SpecificationDetailProductCreationAttributes> {
  // id!: number;
  // groupName!: string;
  // groupKey!: string;
  // groupValue!: string;
  // isOriginalProduct!: boolean;

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

export const specificationDetailProductModel = (sequelize: Sequelize) => {
  SpecificationDetailProductModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    groupName: {
      type: DataTypes.STRING
    },
    groupKey: {
      type: DataTypes.STRING
    },
    groupValue: {
      type: DataTypes.STRING
    },
    isOriginalProduct: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'SpecificationDetailProduct',
    tableName: 'specification_detail_products',
    timestamps: true
  });
  return SpecificationDetailProductModel;
};
