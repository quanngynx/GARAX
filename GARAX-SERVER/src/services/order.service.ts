/* eslint-disable no-empty-pattern */
'use strict';

import { Order } from '@/common/interfaces';
import { NotFoundError } from '@/middlewares';
import { db } from '@/models';

export class OrdersService {
  /**
   * @LOQ-burh
   * @desc Order management by user
   */
  static async getInforOrderByUser({}) {}

  static async getListOrderByUser({}) {}

  static async updateOrderByUser({}) {}

  static async createOrderByUser({}) {}

  static async cancelOrderByUser({}) {}

  /**
   * @LOQ-burh
   * @desc Order management by admin/staff
   */

  static async getAllOrders() {
    const allOrder = await db.Order.findAll({});

    if (!allOrder) throw new NotFoundError('error::find all Order!');

    return allOrder;
  }

  static async createOrderByAdminOrStaff({}) {}

  static async updateOrderByAdminOrStaff({}) {}

  static async cancelOrderByAdminOrStaff({}) {}

  /**
   * #region transaction
   * @desc transaction
   * @param any
   */
  static async getAllTransactions(orderParam: Partial<Order>) {
    const {} = orderParam;
    const allTransactions = await db.Order.findAll({
      attributes: ['id', 'fullname', 'phone', 'total', 'paymentMethod']
    });

    if (!allTransactions) throw new NotFoundError('error::find all Order!');

    return allTransactions;
  }
}
