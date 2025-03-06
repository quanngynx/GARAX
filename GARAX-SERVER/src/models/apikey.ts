'use strict';
import { ApiKey, Models } from '@/common/interfaces';
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export type ApiKeyCreationAttributes = Optional<
  ApiKey,
  'id'
>;

export class ApiKeyModel
extends Model<ApiKeyCreationAttributes>
implements ApiKey {
  id!: string;
  key!: string;
  isActive!: boolean;
  itemPermissionId!: string;
  permissionId!: string;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    // N ApiKeyModel -> 1 ItemPermission
    this.belongsTo(models.ItemPermission, {
      foreignKey: 'itemPermissionId',
      as: 'itemPermission',
    });
    // N ApiKeyModel -> 1 Permission
    this.belongsTo(models.Permission, {
      foreignKey: 'permissionId',
      as: 'permission',
    });
  }
}

export default (sequelize: Sequelize) => {
  ApiKeyModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    itemPermissionId: {
      type: DataTypes.STRING,
    },
    permissionId: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'ApiKey',
    tableName: 'api_keys',
    timestamps: true
  });
  return ApiKeyModel;
};
