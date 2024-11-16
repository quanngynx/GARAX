'use strict';
const {
  Model
} = require('sequelize');

const { default: slugify } = require("slugify");

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
    idNews: DataTypes.INTEGER,
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
    timestamps: true,
    hooks: {
      beforeValidate: (news) => {
        news.alias = slugify(news.title, { lower: true, trim: true });
      },
    },
  });
  return News;
};
