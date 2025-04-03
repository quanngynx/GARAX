'use strict';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { BrandModel, db } from '../models';
import { AddNewBrandRequest } from '@/common/requests/brand';
import { QueryOptionsByBuilder } from './queryOptions';
import { GetAllProductsByQueryOptionsQueryState } from '@/common/requests/product';

const brandOptionsQuery = new QueryOptionsByBuilder<BrandModel>(BrandModel);

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

  /**
   * @refference: https://sequelize.org/docs/v6/other-topics/typescript/#utility-types
   * @param options: GetAllProductsByQueryOptionsQueryState
   * @returns {Promise<{
   *   totalPage: number;
   *   totalRows: number;
   *   rows: BrandModel[];
   * }>}
   */
  static async getAllProductsByQueryOptions({
    filters,
    search,
    sort,
    pagination
  }: GetAllProductsByQueryOptionsQueryState): Promise<{
    totalPage: number;
    totalRows: number;
    rows: BrandModel[];
  }> {
    const optionsParse = await brandOptionsQuery.optionsParse({
      filters,
      search,
      sort,
      pagination
    });
    const response = brandOptionsQuery.getList(optionsParse);
    return response;
  }
}
