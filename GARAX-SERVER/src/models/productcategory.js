'use strict';
const {
  Model
} = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class productCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productCategory.belongsTo(models.Product, {
        foreignKey: 'idProduct', // from productCategory
        as: 'product',
      });
    }
  }
  productCategory.init({
    idProductCategory: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idProduct: DataTypes.INTEGER,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'productCategory',
    timestamps: true,
    hooks: {
      beforeValidate: (productCategory) => {
        productCategory.alias = slugify(productCategory.title, { lower: true, trim: true });
      },
    },
  });
  return productCategory;
};
