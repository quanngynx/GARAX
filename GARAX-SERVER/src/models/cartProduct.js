'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartProduct.hasMany(models.CartItemsProduct, {
        foreignKey: 'idCartProduct',  // from CartItemsProduct
        as: 'cartItemsProduct'
      });
    }
  }
  CartProduct.init({
    idCartProduct: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUser: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    cartState: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      defaultValue: 'pending'
    },
    countItems: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'CartProduct',
  });
  return CartProduct;
};
