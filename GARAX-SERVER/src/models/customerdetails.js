'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerDetails extends Model {
    static associate(models) {
      CustomerDetails.belongsTo(models.Account, {
        foreignKey: 'IDAcc',
        onDelete: 'CASCADE',
      });
    }
  }

  CustomerDetails.init({
    IDCusDe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Fullname: DataTypes.STRING,
    Phone: DataTypes.STRING,
    IDAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CustomerDetails',
    tableName: 'customerdetails',
    freezeTableName: true,
  });

  return CustomerDetails;
};
