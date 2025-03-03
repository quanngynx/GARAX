"use strict";

const { Account } = require('../models');

class AccountService {
  static findByEmail = async ({
    email,
    select = ['email', 'password', 'name', 'phone', 'status', 'roles']
  }) => {
    return await Account.findOne({
      where: { email },
      attributes: select,
      raw: true, // Tương đương với .lean() trong Mongoose
    });
  };
}

module.exports = AccountService
