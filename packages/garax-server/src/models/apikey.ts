'use strict';
import { ApiKey, Models } from '@/common/interfaces';
import { Model, DataTypes, Sequelize, Optional, Association } from 'sequelize';
import { ItemPermissionModel } from './itempermission';
import { PermissionModel } from './permission';

export type ApiKeyCreationAttributes = Optional<ApiKey, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>;

export class ApiKeyModel extends Model<ApiKeyCreationAttributes> {
  public static associations: {
    itemPermission: Association<ItemPermissionModel, ApiKeyModel>;
    permission: Association<PermissionModel, ApiKeyModel>;
  };
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
      as: 'itemPermission'
    });
    // N ApiKeyModel -> 1 Permission
    this.belongsTo(models.Permission, {
      foreignKey: 'permissionId',
      as: 'permission'
    });
  }
}

const apiKeyModel = (sequelize: Sequelize) => {
  ApiKeyModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      key: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      itemPermissionId: {
        type: DataTypes.INTEGER
      },
      permissionId: {
        type: DataTypes.INTEGER
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      updatedBy: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'ApiKey',
      tableName: 'api_keys',
      timestamps: true
    }
  );
  return ApiKeyModel;
};
export default apiKeyModel;
