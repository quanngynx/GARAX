'use strict';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ADDRESS_VALUES } from '@/common/constants';
import { Address, Models } from '@/common/interfaces';

export type AddressCreationAttributes = Optional<
  Address,
  'id'
>;

export class AddressModel
extends Model<AddressCreationAttributes>
implements Address {
  id!: string;
  type!: typeof ADDRESS_VALUES[number];
  streetRoad!: string;
  wardOrCommune!: string;
  district!: string;
  city!: string;
  userId!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
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

export default (sequelize: Sequelize) => {
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
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: true
  });
  return AddressModel;
};
