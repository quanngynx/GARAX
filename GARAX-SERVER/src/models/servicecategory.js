'use strict';
const {
  Model
} = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class ServiceCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceCategory.init({
    idServiceCategory: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceCategory',
    timestamps: true,
    hooks: {
      beforeValidate: (serviceCategory) => {
        serviceCategory.alias = slugify(serviceCategory.title, { lower: true, trim: true });
      },
    },
  });
  return ServiceCategory;
};
