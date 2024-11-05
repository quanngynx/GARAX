'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceImage.init({
    idServiceImage: DataTypes.STRING,
    serviceId: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceImage',
  });
  return ServiceImage;
};