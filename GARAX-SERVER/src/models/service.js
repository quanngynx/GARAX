'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    idService: DataTypes.STRING,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    serviceCode: DataTypes.STRING,
    description: DataTypes.STRING,
    detail: DataTypes.STRING,
    image: DataTypes.STRING,
    originalPrice: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    priceSale: DataTypes.DECIMAL,
    isActive: DataTypes.BOOLEAN,
    serviceCategoryId: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};