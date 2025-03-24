'use strict';
import { ItemPermission, Models } from '@/common/interfaces';
import { Sequelize, Model, DataTypes, Association, Optional } from 'sequelize';
import { PermissionModel } from './permission';
import { ApiKeyModel } from './apikey';

export type ItemPermissionCreationAttributes = Optional<ItemPermission, 'id'>;

export class ItemPermissionModel extends Model<ItemPermission, ItemPermissionCreationAttributes> {
  // id!: number;
  // itemKeyAccept!: string;
  // itemValueAccept!: string;
  // isActive!: boolean;
  // permissionId!: string;

  public static associations: {
    permission: Association<PermissionModel, ItemPermissionModel>;
    apiKey: Association<ApiKeyModel, ItemPermissionModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    // N ItemPermissionModel -> 1 Permission
    this.belongsTo(models.Permission, {
      foreignKey: 'permissionId',
      as: 'permission'
    });
    // 1 ItemPermissionModel -> N ApiKey
    this.hasMany(models.ApiKey, {
      foreignKey: 'itemPermissionId',
      as: 'apiKeys'
    });
  }
}

export const itemPermissionModel = (sequelize: Sequelize) => {
  ItemPermissionModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      itemKeyAccept: {
        type: DataTypes.STRING
      },
      itemValueAccept: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN
      },
      permissionId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'ItemPermission',
      tableName: 'item_permissions',
      timestamps: true
    }
  );
  return ItemPermissionModel;
};
