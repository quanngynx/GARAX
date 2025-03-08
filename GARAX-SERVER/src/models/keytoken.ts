'use strict';
import { KeyToken, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type KeyTokenCreationAttributes = Optional<
  KeyToken,
  'id'
>;

export class KeyTokenModel
extends Model<KeyToken, KeyTokenCreationAttributes>
implements KeyToken {
  id!: string;
  privateKey!: Text;
  publicKey!: Text;
  refreshToken!: string;
  refreshTokenUsed!: JSON;
  userId!: string;
  created_at!: Date;
  updated_at!: Date;

  public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export const keyTokenModel = (sequelize: Sequelize) => {
  KeyTokenModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    privateKey: {
      type: DataTypes.TEXT
    },
    publicKey: {
      type: DataTypes.TEXT
    },
    refreshToken: {
      type: DataTypes.STRING
    },
    refreshTokenUsed: {
      type: DataTypes.JSON
    },
    userId: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'KeyToken',
    tableName: 'key_tokens',
    timestamps: true
  });
  return KeyTokenModel;
};
