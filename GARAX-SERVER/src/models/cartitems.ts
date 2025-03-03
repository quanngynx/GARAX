'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartItems.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qty: DataTypes.INTEGER,
    cartId: DataTypes.STRING,
    productVariantId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CartItems',
    tableName: 'cart_items',
    timestamps: true
  });
  return CartItems;
};
