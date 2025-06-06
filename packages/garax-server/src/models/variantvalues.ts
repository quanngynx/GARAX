'use strict';
import { Models, VariantValues } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { VariantKeysModel } from './variantkeys';

export type VariantValuesCreationAttributes = Optional<
  VariantValues,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class VariantValuesModel extends Model<VariantValues, VariantValuesCreationAttributes> {
  public static associations: {
    variantKey: Association<VariantKeysModel, VariantValuesModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    this.belongsTo(models.VariantKeys, {
      foreignKey: 'variantKeyId',
      as: 'variant_key'
    });
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
export default variantValuesModel;
