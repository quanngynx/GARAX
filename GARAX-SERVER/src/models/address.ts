'use strict';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { ADDRESS_VALUES } from '@/common/constants';
import { Models } from '@/common/interfaces';

export class AddressModel extends Model {
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
    }
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: true
  });
  return AddressModel;
};
