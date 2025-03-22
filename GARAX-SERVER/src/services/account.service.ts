"use strict";
import { FindByEmail } from "@/common/requests/account";
import { AccountModel, db } from '../models';

export class AccountService {
  static findByEmail = async ({
    email,
    select = [
      'email',
      'password',
      'userName',
      'phone',
      // 'status',
      'roleId'
    ]
  } : FindByEmail): Promise<AccountModel | null> => {
    return await db.Account.findOne({
      where: { email },
      attributes: select,
      raw: true, // Tương đương với .lean() trong Mongoose
    });
  };

  static async getInfoUserByEmail({ email } :  { email: string }) {
    return await db.Account.findOne({
      where: { email },
      // attributes: select,
      raw: true, // Tương đương với .lean() trong Mongoose
    });
  }
}
