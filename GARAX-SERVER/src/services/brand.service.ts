'use strict';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { db } from '../models';
import { AddNewBrandRequest } from '@/common/requests/brand';

export class BrandService {
  static async addNewBrand({ name }: AddNewBrandRequest) {
    try {
      const newProductCate = await db.Brand.create({
        name
      });

      if (!newProductCate) throw new BadRequestError('error::create new Product');

      return newProductCate;
    } catch (error) {
      console.error('Error in addNewCategory:', error);
      throw new InternalServerError(`${error}`);
    }
  }

  static async getAllBrand() {
    const allBrand = await db.Brand.findAll({});

    if (!allBrand) throw new NotFoundError('error::find all Brand!');

    return allBrand;
  }
}
