'use strict';
import { ApiKey, Models } from '@/common/interfaces';
import { Model, DataTypes, Sequelize, Optional, Association } from 'sequelize';
import { ItemPermissionModel } from './itempermission';
import { PermissionModel } from './permission';

export type ApiKeyCreationAttributes = Optional<ApiKey, 'id'>;

export class ApiKeyModel extends Model<ApiKeyCreationAttributes> {
  // id!: number;
  // key!: string;
  // isActive!: boolean;
  // itemPermissionId!: string;
  // permissionId!: string;

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

export const apiKeyModel = (sequelize: Sequelize) => {
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
