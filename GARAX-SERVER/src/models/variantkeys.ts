'use strict';
import { Models, VariantKeys } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { VariantValuesModel } from './variantvalues';

export type VariantKeysCreationAttributes = Optional<
  VariantKeys,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class VariantKeysModel extends Model<VariantKeys, VariantKeysCreationAttributes> {
  public id!: number;
  // public value: number;
  // public variantKeyId: number;
  // public createBy!: Date;
  // public updateBy!: Date;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public static associations: {
    variantValues: Association<VariantKeysModel, VariantValuesModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.hasOne(models.VariantValues, {
      foreignKey: 'variantKeyId',
      as: 'variant_values'
    });
  }
}

export const variantKeysModel = (sequelize: Sequelize) => {
  VariantKeysModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      key: {
        type: DataTypes.STRING
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
      modelName: 'VariantKeys',
      tableName: 'variant_keys',
      timestamps: true
    }
  );
  return VariantKeysModel;
};
