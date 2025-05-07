'use strict';
import { FindByEmail, GetInfoUserByEmail } from '@/common/requests/account';
import { db } from '../models';
import { GetInforAccountResponse } from '@/common/responses/access';

export class AccountService {
  static findByEmail = async ({
    email,
    select = ['id', 'email', 'password', 'userName', 'phone', 'roleId']
  }: FindByEmail) => {
    const result = (await db.Account.findOne({
      where: { email },
      attributes: select,
      raw: true
    })) as GetInforAccountResponse | null;

    return {
      id: result?.id || 0,
      email: result?.email || '',
      password: result?.password || '',
      userName: result?.userName || '',
      phone: result?.phone || '',
      roleId: result?.roleId || 0
    };
  };

  static async getInfoUserByEmail({ email }: GetInfoUserByEmail) {
    return await db.Account.findOne({
      where: { email },
      // attributes: select,
      raw: true
    });
  }
}
