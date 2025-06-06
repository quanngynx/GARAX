'use strict';
import { Models, Order } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { CartModel } from './cart';
import { OrderDetailsModel } from './orderdetails';

export type OrderCreationAttributes = Optional<Order, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>;

export class OrderModel extends Model<Order, OrderCreationAttributes> {
  id!: number;
  public cart?: CartModel;

  public static associations: {
    orderDetails: Association<OrderModel, OrderDetailsModel>;
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
      as: 'account'
    });
  }
}

export const orderModel = (sequelize: Sequelize) => {
  OrderModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.ENUM('COD', 'PAYOS', 'PRESSPAY'),
        defaultValue: 'COD'
      },
      paymentStatus: {
        type: DataTypes.ENUM('PENDING', 'PAID', 'FAILED', 'CANCELLED', 'REFUNDED', 'PROCESSING'),
        defaultValue: 'PENDING'
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
      createdBy: {
        type: DataTypes.STRING
      },
      updatedBy: {
        type: DataTypes.STRING
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
      modelName: 'Order',
      tableName: 'orders'
    }
  );
  return OrderModel;
};
export default orderModel;
