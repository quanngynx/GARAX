'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    desc: DataTypes.JSON,
    countProduct: DataTypes.INTEGER,
    isParentCategory: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    imageId: DataTypes.STRING,
    parentId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoryProduct',
    tableName: 'category_products',
     timestamps: true
  });
  return CategoryProduct;
};
