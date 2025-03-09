"use strict";
import { FindByEmail } from "@/common/requests/account";
import { db } from '../models';

export class AccountService {
  static findByEmail = async ({
    email,
    select = ['email', 'password', 'name', 'phone', 'status', 'roles']
  } : FindByEmail) => {
    return await db.Account.findOne({
      where: { email },
      attributes: select,
      raw: true, // Tương đương với .lean() trong Mongoose
    });
  };
}
