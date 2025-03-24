'use strict';
import { Models, VariantValues } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type VariantValuesCreationAttributes = Optional<
  VariantValues,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class VariantValuesModel extends Model<VariantValues, VariantValuesCreationAttributes> {
  public id!: number;
  // public value: number;
  // public variantKeyId: number;
  // public createBy!: Date;
  // public updateBy!: Date;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  // public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static associate(_models: Models) {
    // define association here
  }
}

export const variantValuesModel = (sequelize: Sequelize) => {
  VariantValuesModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING
      },
      variantKeyId: {
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
      modelName: 'VariantValues',
      tableName: 'variant_values',
      timestamps: true
    }
  );
  return VariantValuesModel;
};
