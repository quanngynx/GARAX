 'use strict';
import { Sequelize, DataTypes, Model, Optional, Association } from 'sequelize';
import { GENDER_VALUES, REGEX, USERS } from '@/common/constants';
import { Account, Models } from '@/common/interfaces';
import { AddressModel } from './address';

const defaultAvatar = USERS.AVATAR.DEFAULT_VALUE;
export type AccountCreationAttributes = Optional<
  Account,
  'id' | 'userName' | 'createdAt' | 'updatedAt'
>;

export class AccountModel
extends Model<Account, AccountCreationAttributes> {
  // public id!: string;
  // public userName!: string;
  // public firstName!: string;
  // public lastName!: string;
  // public gender!: typeof GENDER_VALUES[number];
  // public dob!: number;
  // public email!: string;
  // public phone!: string;
  // public avatar!: string;
  // public password!: string;
  // public emptyPassword!: boolean;
  // public googleId!: string;
  // public pointerId!: string;
  // public roleId!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

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
// export default (sequelize: Sequelize) => {
  AccountModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [5, 20],
          is: REGEX.FIELDS.USERNAME
        }
      },
      firstName: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: ''
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
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          is: REGEX.FIELDS.PHONE
        }
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: defaultAvatar
      },
      password: {
        type: DataTypes.STRING,
      },
      emptyPassword: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      googleId: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      pointerId: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      roleId: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
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
