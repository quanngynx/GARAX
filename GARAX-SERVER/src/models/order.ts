'use strict';
import { PAYMENT_METHOD_VALUES, PAYMENT_STATUS_VALUES } from '@/common/constants';
import { Models, Order } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type OrderCreationAttributes = Optional<
  Order,
  'id'
>;

export class OrderModel
extends Model<Order, OrderCreationAttributes>
implements Order {
  id!: string;
  fullname!: string;
  phone!: string;
  isReceiveAtStore!: boolean;
  paymentMethod!: typeof PAYMENT_METHOD_VALUES[number];
  paymentStatus!: typeof PAYMENT_STATUS_VALUES[number];
  subTotalFromProd!: number;
  shippingFee!: number;
  discount!: number;
  total!: number;
  userId!: string;
  addressId!: string;
  cartId!: string;
  createBy!: string;
  updateBy!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

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

export const order = (sequelize: Sequelize) => {
  OrderModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    isReceiveAtStore: {
      type: DataTypes.BOOLEAN
    },
    paymentMethod: {
      type: DataTypes.ENUM
    },
    paymentStatus: {
      type: DataTypes.ENUM
    },
    subTotalFromProd: {
      type: DataTypes.FLOAT
    },
    shippingFee: {
      type: DataTypes.FLOAT
    },
    discount: {
      type: DataTypes.FLOAT
    },
    total: {
      type: DataTypes.FLOAT
    },
    userId: {
      type: DataTypes.STRING
    },
    addressId: {
      type: DataTypes.STRING
    },
    cartId: {
      type: DataTypes.STRING
    },
    createBy: {
      type: DataTypes.STRING
    },
    updateBy: {
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
    modelName: 'Order',
    tableName: 'orders'
  });
  return OrderModel;
};
