'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    idPayment: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idOrderProduct: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    amount: DataTypes.FLOAT,
    currency: {
      type: DataTypes.ENUM('VND', 'USD'),
      defaultValue: 'VND'
    },
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};
