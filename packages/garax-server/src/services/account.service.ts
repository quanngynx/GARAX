'use strict';
import { FindByEmail, GetInfoUserByEmail } from '@/common/requests/account';
import { db } from '../models';
import { GetInforAccountResponse } from '@/common/responses/access';

export class AccountService {
  static findByEmail: ({ email, select }: FindByEmail) => Promise<{
    id: number;
    email: string;
    password: string;
    userName: string;
    phone: string;
    roleId: number;
  }> = async ({ email, select = ['id', 'email', 'password', 'userName', 'phone', 'roleId'] }: FindByEmail) => {
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
      attributes: [
        'id',
        'userName',
        'firstName',
        'lastName',
        'gender',
        'dob',
        'email',
        'phone',
        'avatar',
        'password',
        'emptyPassword',
        'googleId',
        'pointerId',
        'roleId'
      ],
      include: [
        {
          model: db.Address,
          as: 'variant_key',
          attributes: ['id', 'key']
        }
      ],
      raw: true,
      nest: true
    });
  }
}
