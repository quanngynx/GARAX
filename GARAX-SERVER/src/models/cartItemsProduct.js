'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItemsProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItemsProduct.belongsTo(models.Cart, {
        foreignKey: 'idCartProduct',  // from CartItemsProduct
        as: 'cart'
      });
      CartItemsProduct.hasMany(models.Product, {
        foreignKey: 'idCartItemsProduct',  // from Product
        as: 'product'
      });
    }
  }
  CartItemsProduct.init({
    idCartItemsProduct: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idCartProduct: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItemsProduct',
    timestamps: true
  });
  return CartItemsProduct;
};
