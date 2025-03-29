'use strict';
import { Sequelize, DataTypes, Model, Optional, Association } from 'sequelize';
import { Cart, Models } from '@/common/interfaces';
import { CartItemsModel } from './cartitems';

export type CartCreationAttributes = Optional<Cart, 'id' | 'createdAt' | 'updatedAt'>;

export class CartModel extends Model<CartCreationAttributes> {
  // id!: number;
  // sessionId!: number;
  // userId!: string;
  // createdAt!: Date;
  // updatedAt!: Date;
  cart_items?: CartItemsModel[];

  public static associations: {
    cartItems: Association<CartModel, CartItemsModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.hasMany(models.CartItems, {
      foreignKey: 'cartId',
      as: 'cart_items'
    });
  }
}

export const cartModel = (sequelize: Sequelize): typeof CartModel => {
  CartModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sessionId: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER
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
      modelName: 'Cart',
      tableName: 'carts',
      timestamps: true
    }
  );
  return CartModel;
};
export default cartModel;
