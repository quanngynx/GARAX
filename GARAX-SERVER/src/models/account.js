'use strict';
const {
  Model
} = require('sequelize');
const { COMMON } = require('../constants');
const gender = COMMON.USERS.GENDER
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Address, {
        foreignKey: 'userId',
        as: 'addresses',
      });
    }
  }
  Account.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM(gender.MALE, gender.FEMALE, gender.OTHER),
      defaultValue: gender.MALE
    },
    dob: DataTypes.BIGINT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    emptyPassword: DataTypes.BOOLEAN,
    googleId: DataTypes.STRING,
    pointerId: DataTypes.STRING,
    roleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
    timestamps: true
  });
  return Account;
};
