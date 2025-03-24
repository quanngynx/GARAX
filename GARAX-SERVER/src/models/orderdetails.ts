'use strict';
import { Models, OrderDetails } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { AccountModel } from './account';
import { CartModel } from './cart';
import { ProductVariantValuesModel } from './productvariantvalues';

export type OrderDetailsCreationAttributes = Optional<
  OrderDetails,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class OrderDetailsModel
extends Model<OrderDetails, OrderDetailsCreationAttributes> {
  id!: number;
  // fullname!: string;
  // phone!: string;
  // isReceiveAtStore!: boolean;
  // paymentMethod!: typeof PAYMENT_METHOD_VALUES[number];
  // paymentStatus!: typeof PAYMENT_STATUS_VALUES[number];
  // subTotalFromProd!: number;
  // shippingFee!: number;
  // discount!: number;
  // total!: number;
  // userId!: string;
  // addressId!: string;
  // cartId!: string;
  // createBy!: string;
  // updateBy!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public cart?: CartModel;

  public static associations: {
    orderDetails: Association<OrderDetailsModel, AccountModel>;
    productVariantValues: Association<OrderDetailsModel, ProductVariantValuesModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    this.belongsTo(models.Account, {
      foreignKey: 'userId',
      as: 'account',
    });

    this.belongsTo(models.ProductVariantValues, {
      foreignKey: "productVariantId",
      as: "product_variant_values",
    });
  }
}

export const orderDetailsModel = (sequelize: Sequelize) => {
  OrderDetailsModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.INTEGER
    },
    qty: {
      type: DataTypes.INTEGER
    },
    orderId: {
      type: DataTypes.INTEGER
    },
    productVariantId: {
      type: DataTypes.INTEGER
    },
    createdBy: {
      type: DataTypes.STRING
    },
    updatedBy: {
      type: DataTypes.STRING
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
    modelName: 'OrderDetails',
    tableName: 'order_details'
  });
  return OrderDetailsModel;
};
