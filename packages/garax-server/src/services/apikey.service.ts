'use strict';
import { db } from '@/models';

export class ApiKeyService {
  static async findById(key: string) {
    // const newKey = await apikeyModel.create({
    //     key: crypto.randomBytes(64).toString('hex'),
    //     permissions: ['0000']
    // })
    // console.log(newKey)

    const objKey = await db.ApiKey.findOne({
      where: {
        key,
        isActive: true
      },
      raw: true
    });
    return objKey;
  }
}
