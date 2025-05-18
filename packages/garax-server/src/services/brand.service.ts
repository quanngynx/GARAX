'use strict';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { BrandCreationAttributes, BrandModel, db } from '../models';
import { AddNewBrandRequest } from '@/common/requests/brand';
import { QueryOptionsByBuilder } from './queryOptions';
import { GetAllProductsRequest } from '@/common/requests/product';

const brandOptionsQuery = new QueryOptionsByBuilder<BrandModel>(BrandModel);

export class BrandService {
  static async addNewBrand({ name }: AddNewBrandRequest): Promise<BrandCreationAttributes> {
    try {
      const newProductCate = await db.Brand.create({
        name
      });

      if (!newProductCate) throw new BadRequestError('error::create new Product');

      return newProductCate.dataValues;
    } catch (error) {
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
   * @param options: GetAllProductsRequest
   * @returns {Promise<{
   *   totalPage: number;
   *   totalRows: number;
   *   rows: BrandModel[];
   * }>}
   */
  static async getAllBrandsByQueryOptions({ filters, search, sort, pagination }: GetAllProductsRequest): Promise<{
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
    const response = await brandOptionsQuery.getList(optionsParse);
    return response;
  }

  static async deleteBrandById(id: number): Promise<{
    numberRowsIsDeleted: number;
  }> {
    const isExist = db.Brand.findOne({ where: { id } });

    if (!isExist) throw new BadRequestError('Brand is not exist!!!');

    return {
      numberRowsIsDeleted: await db.Brand.destroy({
        where: {
          id
        }
      })
    };
  }

  static async deleteAllBrand({ confirm }: { confirm: boolean }): Promise<{
    numberRowsIsDeleted: number;
  } | null> {
    const result = await db.Brand.destroy({ truncate: true });
    return confirm
      ? {
          numberRowsIsDeleted: result
        }
      : null;
  }
}
