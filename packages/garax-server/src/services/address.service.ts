'use strict';

import { Address } from '@/common/interfaces';
import { AddNewAddressRequest } from '@/common/requests/address';
import { InternalServerError, NotFoundError } from '@/middlewares';
import { AddressModel, db } from '@/models';

export class AddressService {
  static async getAllAddressByIdAccount(userId: number): Promise<AddressModel[]> {
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

  static async getAddressById(id: number): Promise<Address> {
    if (!id) {
      throw new NotFoundError('Not found user!');
    }

    const result = await db.Address.findByPk(id);

    if (!result) {
      throw new NotFoundError('Not found result!');
    }

    return result.dataValues;
  }

  static async addNewAddress({
    type,
    streetRoad,
    wardOrCommune,
    district,
    city,
    userId
  }: AddNewAddressRequest): Promise<Address> {
    if (!userId) {
      throw new NotFoundError('Not found user!');
    }

    try {
      const createNewAddress = await db.Address.create({ type, streetRoad, wardOrCommune, district, city, userId });
      if (!createNewAddress) {
        throw new NotFoundError('Not found user is created!');
      }

      return createNewAddress.dataValues;
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }
  static async deleteAddressById(id: number): Promise<{
    numberRowsIsDeleted: number;
  }> {
    try {
      const deleteAdress = await db.Address.destroy({
        where: {
          id: id
        }
      });
      return {
        numberRowsIsDeleted: deleteAdress
      };
    } catch (error) {
      throw new InternalServerError(`${error}`);
    }
  }
}
