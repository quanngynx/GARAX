'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    idProduct: DataTypes.STRING,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    productCode: DataTypes.STRING,
    description: DataTypes.STRING,
    detail: DataTypes.STRING,
    image: DataTypes.STRING,
    originalPrice: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    priceSale: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    productCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
