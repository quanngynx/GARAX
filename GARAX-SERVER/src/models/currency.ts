/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Currency, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type CurrencyCreationAttributes = Optional<Currency, 'id' | 'createdAt' | 'updatedAt'>;

export class CurrencyModel extends Model<CurrencyCreationAttributes> {
  // id!: number;
  // currency!: string;
  // desc!: string;
  // createdAt!: Date;
  // updatedAt!: Date;

  // public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export const currencyModel = (sequelize: Sequelize) => {
  CurrencyModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      currency: {
        type: DataTypes.STRING
      },
      desc: {
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
      modelName: 'Currency',
      tableName: 'currencies',
      timestamps: true
    }
  );
  return CurrencyModel;
};
export default currencyModel;
