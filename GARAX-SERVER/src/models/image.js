'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Image.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    alt: DataTypes.STRING,
    original: DataTypes.STRING,
    typeSize: DataTypes.ENUM,
    typeImage: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
    timestamps: true
  });
  return Image;
};
