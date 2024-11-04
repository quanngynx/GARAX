'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    idNews: DataTypes.STRING,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    description: DataTypes.STRING,
    detail: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};