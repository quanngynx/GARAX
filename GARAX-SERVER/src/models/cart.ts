'use strict';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Cart, Models } from '@/common/interfaces';

export type CartCreationAttributes = Optional<
  Cart,
  'id'
>;

export class CartModel
extends Model<CartCreationAttributes>
implements Cart  {
  id!: string;
  sessionId!: string;
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

export const cartModel = (sequelize: Sequelize): typeof CartModel => {
  CartModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sessionId: {
      type: DataTypes.STRING
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
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: true
  });
  return CartModel;
};
