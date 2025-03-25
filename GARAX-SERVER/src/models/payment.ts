'use strict';
import { Models, Payment } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type PaymentCreationAttributes = Optional<Payment, 'id' | 'createdAt' | 'updatedAt'>;

export class PaymentModel extends Model<PaymentCreationAttributes> {
  // public id!: number;
  // public amount!: number;
  // public desc!: string;
  // public orderId!: string;
  // public currencyId!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  // public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static associate(_models: Models) {
    // define association here
  }
}

export const paymentModel = (sequelize: Sequelize) => {
  PaymentModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.FLOAT
      },
      desc: {
        type: DataTypes.STRING
      },
      orderId: {
        type: DataTypes.INTEGER
      },
      currencyId: {
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
      modelName: 'Payment',
      tableName: 'payments'
    }
  );
  return PaymentModel;
};
