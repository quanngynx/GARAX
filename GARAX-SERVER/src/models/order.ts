'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    isReceiveAtStore: DataTypes.BOOLEAN,
    paymentMethod: DataTypes.ENUM,
    paymentStatus: DataTypes.ENUM,
    subTotalFromProd: DataTypes.FLOAT,
    shippingFee: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    userId: DataTypes.STRING,
    addressId: DataTypes.STRING,
    cartId: DataTypes.STRING,
    createBy: DataTypes.STRING,
    updateBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};
