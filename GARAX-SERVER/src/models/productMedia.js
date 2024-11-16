'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductMedia.belongsTo(models.Product, {
        foreignKey: 'idProduct', // from productCategory
        as: 'product',
      });
    }
  }
  ProductMedia.init({
    idProductMedia: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idProduct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductMedia',
    timestamps: true,
  });
  return ProductMedia;
};
