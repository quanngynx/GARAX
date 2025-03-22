'use strict';
import { PAYMENT_METHOD_VALUES, PAYMENT_STATUS_VALUES } from '@/common/constants';
import { Models, Order } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { AccountModel } from './account';
import { CartModel } from './cart';

export type OrderCreationAttributes = Optional<
  Order,
  'id' | 'createdAt' | 'updatedAt'
>;

export class OrderModel
extends Model<Order, OrderCreationAttributes> {
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
  cartId!: string;
  // createBy!: string;
  // updateBy!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  public cart?: CartModel;

  public static associations: {
    order: Association<OrderModel, AccountModel>;
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
  }
}

export const orderModel = (sequelize: Sequelize) => {
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
      type: DataTypes.ENUM(...PAYMENT_METHOD_VALUES)
    },
    paymentStatus: {
      type: DataTypes.ENUM(...PAYMENT_STATUS_VALUES)
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
      type: DataTypes.INTEGER
    },
    addressId: {
      type: DataTypes.INTEGER
    },
    cartId: {
      type: DataTypes.INTEGER
    },
    createBy: {
      type: DataTypes.STRING
    },
    updateBy: {
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
    modelName: 'Order',
    tableName: 'orders'
  });
  return OrderModel;
};
