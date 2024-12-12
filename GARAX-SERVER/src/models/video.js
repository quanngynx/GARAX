'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    directoryPath: DataTypes.STRING,
    alt: DataTypes.STRING,
    original: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'videos',
    timestamps: true
  });
  return Video;
};
