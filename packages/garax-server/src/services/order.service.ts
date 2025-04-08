/* eslint-disable no-empty-pattern */
'use strict';

import { Order } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQueryState } from '@/common/requests/product';
import { NotFoundError } from '@/middlewares';
import { db, OrderModel } from '@/models';
import { QueryOptionsByBuilder } from './queryOptions';

const orderOptionsQuery = new QueryOptionsByBuilder<OrderModel>(OrderModel);

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

  /**
   * @refference: https://sequelize.org/docs/v6/other-topics/typescript/#utility-types
   * @param options: GetAllProductsByQueryOptions
   * @returns {Promise<{
   *   totalPage: number;
   *   totalRows: number;
   *   rows: OrderModel[];
   * }>}
   */
  static async getAllOrdersByQueryOptions({
    filters,
    search,
    sort,
    pagination
  }: GetAllProductsByQueryOptionsQueryState): Promise<{
    totalPage: number;
    totalRows: number;
    rows: OrderModel[];
  }> {
    const optionsParse = await orderOptionsQuery.optionsParse({
      filters,
      search,
      sort,
      pagination
    });
    const response = orderOptionsQuery.getList(optionsParse);
    return response;
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
