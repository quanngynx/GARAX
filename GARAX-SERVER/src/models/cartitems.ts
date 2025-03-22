'use strict';
import { CartItems, Models } from "@/common/interfaces";
import { DataTypes, Sequelize, Model, Optional, Association } from "sequelize";
import { ProductVariantValuesModel } from "./productvariantvalues";
import { CartModel } from "./cart";

export type CartItemsCreationAttributes = Optional<
  CartItems,
  'id' | 'createdAt' | 'updatedAt'
>;

export class CartItemsModel
extends Model<CartItemsCreationAttributes> {
  id!: number;
  // qty!: number;
  // cartId!: string;
  // productVariantId!: string;
  // createdAt!: Date;
  // updatedAt!: Date;

  public static associations: {
    cartItems: Association<CartItemsModel, CartModel>;
    productVariantValues: Association<ProductVariantValuesModel, CartItemsModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.belongsTo(models.Cart, {
      foreignKey: 'cartId',
      as: 'carts',
    });

    this.hasOne(models.ProductVariantValues, {
      foreignKey: 'productVariantId',
      as: 'product_variant_values'
    });
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
      type: DataTypes.INTEGER
    },
    productVariantId: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
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
