'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1 Permission -> N ItemPermission
      this.hasMany(models.ItemPermission, {
        foreignKey: 'permissionId',
        as: 'itemPermissions',
      });
    }
  }
  Permission.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    keyAccept: DataTypes.STRING,
    valueAccept: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: 'permissions',
    timestamps: true
  });
  return Permission;
};
