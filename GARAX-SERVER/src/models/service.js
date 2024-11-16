'use strict';
const {
  Model
} = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    idService: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    serviceCategoryId: DataTypes.INTEGER,
    serviceImageId: DataTypes.INTEGER,
    serviceDetailId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Service',
    timestamps: true,
    hooks: {
      beforeValidate: (service) => {
        service.alias = slugify(service.title, { lower: true, trim: true });
      },
    },
  });
  return Service;
};
