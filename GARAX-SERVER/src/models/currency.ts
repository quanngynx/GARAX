'use strict';
import { Currency, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type CurrencyCreationAttributes = Optional<
  Currency,
  'id'
>;

export class CurrencyModel
extends Model<CurrencyCreationAttributes>
implements Currency {
  id!: string;
  currency!: string;
  desc!: string;
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

export default (sequelize: Sequelize) => {

  CurrencyModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currency: {
      type: DataTypes.STRING
    },
    desc: {
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
    modelName: 'Currency',
    tableName: 'currencies',
    timestamps: true
  });
  return CurrencyModel;
};
