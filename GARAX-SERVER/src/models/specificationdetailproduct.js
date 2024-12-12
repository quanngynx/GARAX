'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecificationDetailProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpecificationDetailProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    groupName: DataTypes.STRING,
    groupKey: DataTypes.STRING,
    groupValue: DataTypes.STRING,
    isOriginalProduct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SpecificationDetailProduct',
    tableName: 'specification_detail_products',
    timestamps: true
  });
  return SpecificationDetailProduct;
};
