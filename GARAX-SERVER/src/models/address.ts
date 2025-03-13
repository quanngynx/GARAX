'use strict';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ADDRESS_VALUES } from '@/common/constants';
import { Address, Models } from '@/common/interfaces';
import { AccountModel } from './account';

export type AddressCreationAttributes = Optional<
  Address,
  'id' | 'createdAt' | 'updatedAt'
>;

export class AddressModel
extends Model<Address, AddressCreationAttributes> {
  // public id!: string;
  // public type!: typeof ADDRESS_VALUES[number];
  // public streetRoad!: string;
  // public wardOrCommune!: string;
  // public district!: string;
  // public city!: string;
  // public userId!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public static associations: {
    address: Association<AddressModel, AccountModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    this.belongsTo(models.Account, {
      foreignKey: 'userId',
      as: 'account',
    });
  }
}

export const addressModel = (sequelize: Sequelize) => {
  AddressModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type : DataTypes.ENUM(...ADDRESS_VALUES),
      defaultValue: ADDRESS_VALUES[1]
    },
    streetRoad: {
      type: DataTypes.STRING,
    },
    wardOrCommune: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    userId: {
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
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: true
  });
  return AddressModel;
};
