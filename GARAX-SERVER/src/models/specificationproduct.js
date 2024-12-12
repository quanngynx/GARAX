'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecificationProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpecificationProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    value: DataTypes.STRING,
    isOriginalProduct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SpecificationProduct',
    tableName: 'specification_products',
    timestamps: true
  });
  return SpecificationProduct;
};
