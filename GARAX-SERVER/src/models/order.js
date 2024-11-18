'use strict';
const { Model } = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Define association with OrderProduct
      Order.hasMany(models.OrderProduct, {
        foreignKey: 'idOrder', // Đảm bảo trường này tồn tại trong OrderProduct
        as: 'orderProducts',  // Alias có thể được sử dụng trong truy vấn
      });
      Order.belongsTo(models.Account, {
        foreignKey: 'idAcc',
        as: 'account',
      });
    }
  }

  Order.init(
    {
      idOrder: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idAcc: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM('pending', 'paid'),
        defaultValue: 'pending',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: true,  // Chỉ cần một lần duy nhất
    }
  );

  return Order;
};
