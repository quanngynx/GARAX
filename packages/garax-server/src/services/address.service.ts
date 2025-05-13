'use strict';

import { AddNewAddressRequest } from '@/common/requests/address';
import { InternalServerError, NotFoundError } from '@/middlewares';
import { db } from '@/models';

export class AddressService {
  static async getAllAddressByIdAccount(userId: number) {
    return await db.Address.findAll({
      where: {
        userId: userId
      },
      attributes: ['id', 'type', 'streetRoad', 'wardOrCommune', 'district', 'city', 'userId'],
      // include: [
      //   {
      //     model: db.Account,
      //     as: 'account',
      //     attributes: [
      //       'id',
      //       'userName',
      //       'firstName',
      //       'lastName',
      //       'gender',
      //       'dob',
      //       'email',
      //       'phone',
      //       'avatar',
      //       'password',
      //       'emptyPassword',
      //       'googleId',
      //       'pointerId',
      //       'roleId'
      //     ]
      //   }
      // ],
      raw: true
      // nest: true
    });
  }

  static async getAddressById(id: number) {
    if (!id) {
      throw new NotFoundError('Not found user!');
    }

    return await db.Address.findByPk(id);
  }

  static async addNewAddress({ type, streetRoad, wardOrCommune, district, city, userId }: AddNewAddressRequest) {
    if (!userId) {
      throw new NotFoundError('Not found user!');
    }

    try {
      const createNewAddress = await db.Address.create({ type, streetRoad, wardOrCommune, district, city, userId });
      if (!createNewAddress) {
        throw new NotFoundError('Not found user is created!');
      }

      return createNewAddress;
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }
  static async deleteAddressById(id: number) {
    try {
      const deleteAdress = await db.Address.destroy({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }
}
