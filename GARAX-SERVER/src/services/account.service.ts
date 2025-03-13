"use strict";
import { FindByEmail } from "@/common/requests/account";
import { db } from '../models';
import { Account } from "@/common/interfaces";

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
  } : FindByEmail): Promise<Account | null> => {
    return await db.Account.findOne({
      where: { email },
      attributes: select,
      raw: true, // Tương đương với .lean() trong Mongoose
    });
  };
}
