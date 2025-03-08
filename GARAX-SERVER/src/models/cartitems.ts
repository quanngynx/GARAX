'use strict';
import { CartItems, Models } from "@/common/interfaces";
import { DataTypes, Sequelize, Model, Optional } from "sequelize";

export type CartItemsCreationAttributes = Optional<
  CartItems,
  'id'
>;

export class CartItemsModel
extends Model<CartItemsCreationAttributes>
implements CartItems {
  id!: string;
  qty!: string;
  cartId!: string;
  productVariantId!: string;
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

export const cartItemsModel = (sequelize: Sequelize): typeof CartItemsModel => {
  CartItemsModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qty: {
      type: DataTypes.INTEGER
    },
    cartId: {
      type: DataTypes.STRING
    },
    productVariantId: {
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
    modelName: 'CartItems',
    tableName: 'cart_items',
    timestamps: true
  });
  return CartItemsModel;
};
