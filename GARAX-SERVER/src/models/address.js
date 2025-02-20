'use strict';
const {
  Model
} = require('sequelize');

const { COMMON } = require('../constants')

const { HOME, OFFICE } = COMMON.ADDRESS
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Account, {
        foreignKey: 'userId',
        as: 'account',
      });
    }
  }
  Address.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type : DataTypes.ENUM(HOME, OFFICE),
      defaultValue: HOME
    },
    streetRoad: DataTypes.STRING,
    wardOrCommune: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: true
  });
  return Address;
};
