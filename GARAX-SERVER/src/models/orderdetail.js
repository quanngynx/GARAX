'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init({
    idOrderDetail: DataTypes.STRING,
    idOrder: DataTypes.STRING,
    idProduct: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    idService: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};