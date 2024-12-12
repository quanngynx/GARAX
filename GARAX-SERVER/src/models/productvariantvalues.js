'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariantValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductVariantValues.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: DataTypes.INTEGER,
    oldPrice: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    manufacturingDate: DataTypes.BIGINT,
    productId: DataTypes.STRING,
    addOverSpecsId: DataTypes.STRING,
    addOverDetailSpecsId: DataTypes.STRING,
    createBy: DataTypes.STRING,
    updateBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductVariantValues',
    tableName: 'product_variant_values',
    timestamps: true
  });
  return ProductVariantValues;
};
