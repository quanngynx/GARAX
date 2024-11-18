'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.hasOne(models.CustomerDetails, {
        as: 'CustomerDetail',
        foreignKey: 'IDAcc',
        onDelete: 'CASCADE',
      });
      Account.hasMany(models.Orders, {
        as: 'order',
        foreignKey: 'IDAcc',
      });
    }
  }

  Account.init({
    IDAcc: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otpTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'account',
    tableName: 'account',
    timestamps: true
  });

  return Account;
};
