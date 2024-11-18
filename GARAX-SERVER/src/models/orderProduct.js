'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderProduct.belongsTo(models.Order, {
        foreignKey: 'idOrder', // from ProductCategory
        as: 'order',
      }); // DONE
      OrderProduct.belongsTo(models.Product, {
        foreignKey: 'idProduct', // from ProductCategory
        as: 'product',
      }); // DONE

    }
  }
  OrderProduct.init({
    idOrderProduct: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idProduct: DataTypes.INTEGER,
    idOrder: DataTypes.INTEGER,
    quantity:DataTypes.FLOAT,

    paymentMethod: {
      type: DataTypes.ENUM('cod','presspay','payos','payoneer'),
      defaultValue: 'cod'
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending','paid','cancelled'),
      defaultValue: 'pending'
    },
    subTotal: DataTypes.FLOAT,
    shippingFee: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrderProduct',
    timestamps: true
  });
  return OrderProduct;
};
