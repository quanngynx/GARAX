/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { db } from '@/models';

export const findByEmail = async ({
  email,
  select = {
    name: 1,
    email: 1,
    password: 2,
    status: 1,
    roles: 1
  }
}: {
  email: string;
  select?: any;
}) => {
  return await db.Account.findOne({
    where: {
      email: email
    },
    attributes: select,
    raw: true
  });
};
