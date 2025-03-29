'use strict';
import { Models, Permission } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ItemPermissionModel } from './itempermission';

export type PermissionCreationAttributes = Optional<Permission, 'id' | 'createdAt' | 'updatedAt'>;

export class PermissionModel extends Model<Permission, PermissionCreationAttributes> {
  // public id!: number;
  // public keyAccept!: string;
  // public valueAccept!: string;
  // public isActive!: boolean;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public static associations: {
    itemPermission: Association<PermissionModel, ItemPermissionModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    // 1 PermissionModel -> N ItemPermissionModel
    this.hasMany(models.ItemPermission, {
      foreignKey: 'permissionId',
      as: 'itemPermissions'
    });
  }
}

export const permissionModel = (sequelize: Sequelize) => {
  PermissionModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      keyAccept: {
        type: DataTypes.STRING
      },
      valueAccept: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN
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
      modelName: 'Permission',
      tableName: 'permissions',
      timestamps: true
    }
  );
  return PermissionModel;
};
export default permissionModel;
