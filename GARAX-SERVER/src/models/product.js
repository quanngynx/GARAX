'use strict';
const {
  Model
} = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    desc: DataTypes.JSON,
    views: DataTypes.INTEGER,
    tags: DataTypes.ENUM,
    manufacturingDate: DataTypes.BIGINT,
    minPrice: DataTypes.INTEGER,
    maxPrice: DataTypes.INTEGER,
    categoryId: DataTypes.STRING,
    subCategoryId: DataTypes.STRING,
    sub2CategoryId: DataTypes.STRING,
    sub3CategoryId: DataTypes.STRING,
    videoId: DataTypes.STRING,
    brandId: DataTypes.STRING,
    status: DataTypes.ENUM,
    createBy: DataTypes.STRING,
    updateBy: DataTypes.STRING
  },{
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    hooks: {
      beforeValidate: (product) => {
        product.slug = slugify(product.name, { lower: true, trim: true });
      },
    },
  });
  return Product;
};


