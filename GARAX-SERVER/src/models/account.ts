 'use strict';
import { Sequelize, DataTypes, Model, Optional, Association } from 'sequelize';
import { GENDER_VALUES } from '@/common/constants';
import { Account, Models } from '@/common/interfaces';
import { AddressModel } from './address';

export type AccountCreationAttributes = Optional<
  Account,
  'id' | 'userName'
>;

export class AccountModel
extends Model<Account, AccountCreationAttributes>
implements Account  {
  public id!: string;
  public userName!: string;
  public firstName!: string;
  public lastName!: string;
  public gender!: typeof GENDER_VALUES[number];
  public dob!: number;
  public email!: string;
  public phone!: string;
  public avatar!: string;
  public password!: string;
  public emptyPassword!: boolean;
  public googleId!: string;
  public pointerId!: string;
  public roleId!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    address: Association<AccountModel, AddressModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    this.hasMany(models.Address, {
      foreignKey: 'userId',
      as: 'addresses',
    });
  }
}

export const accountModel = (sequelize: Sequelize) => {
  AccountModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM(...GENDER_VALUES),
        defaultValue: GENDER_VALUES[0],
      },
      dob: {
        type: DataTypes.BIGINT,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      emptyPassword: {
        type: DataTypes.BOOLEAN,
      },
      googleId: {
        type: DataTypes.STRING,
      },
      pointerId: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "AccountModel",
      tableName: "accounts",
      timestamps: true,
    }
  );

  return AccountModel;
}
