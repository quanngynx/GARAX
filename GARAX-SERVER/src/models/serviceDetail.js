'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceDetail.init({
    idServiceDetail: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    content: DataTypes.TEXT,
    additionalInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceDetail',
    timestamps: true
  });
  return ServiceDetail;
};
