'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // N ItemPermission -> 1 Permission
      this.belongsTo(models.Permission, {
        foreignKey: 'permissionId',
        as: 'permission',
      });
      // 1 ItemPermission -> N ApiKey
      this.hasMany(models.ApiKey, {
        foreignKey: 'itemPermissionId',
        as: 'apiKeys',
      });
    }
  }
  ItemPermission.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemKeyAccept: DataTypes.STRING,
    itemValueAccept: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    permissionId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ItemPermission',
    tableName: 'item_permissions',
    timestamps: true
  });
  return ItemPermission;
};
