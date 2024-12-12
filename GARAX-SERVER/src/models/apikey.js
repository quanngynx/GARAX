'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N ApiKey -> 1 ItemPermission
      this.belongsTo(models.ItemPermission, {
        foreignKey: 'itemPermissionId',
        as: 'itemPermission',
      });
      // N ApiKey -> 1 Permission
      this.belongsTo(models.Permission, {
        foreignKey: 'permissionId',
        as: 'permission',
      });
    }
  }
  ApiKey.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    key: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    itemPermissionId: DataTypes.STRING,
    permissionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
    timestamps: true
  });
  return ApiKey;
};
