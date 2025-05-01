import { Model, ModelStatic, Transaction, WhereOptions } from 'sequelize';
import { QueryOptions } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQueryState } from '@/common/requests/product';
import { jsonUtils } from '@/common/utils';
import { NotFoundError } from '@/middlewares';
import {
  ProductModel,
  ProductVariantValuesModel,
  VariantValuesModel,
  AttributeValuesModel,
  ProductAttributeValuesModel,
  OrderModel,
  VariantKeysModel
} from '@/models';

export class QueryOptionsByBuilder<T extends Model> {
  constructor(private chooseModel: ModelStatic<T>) {}

  async getList(
    queryOptions: QueryOptions<T>
    // queryValues: ParamQueryMustHave
  ): Promise<{
    totalPage: number;
    totalRows: number;
    rows: T[];
  }> {
    let data;
    const { filters, search, sort, pagination } = queryOptions;
    try {
      /**
       * 1. pagination
       */
      const queryPagination = {
        offset: (pagination.page - 1) * pagination.limit,
        limit: pagination.limit
      };
      /**
       * 2. filter
       * @example
       * where: {
       *   createdAt: {
       *     [Op.gt]: sql.cast('2012-01-01', 'date'),
       *   },
       * },
       * where: {
       *   createdAt: {
       *     [Op.gt]: sql.cast('2012-01-01', 'date'),
       *   },
       * },
       */
      // const where: Record<any, any> = {};
      // console.log('filters::', filters);
      // console.log('search::', search);
      if (filters) {
        // for (const [key, value] of Object.entries(filters)) {
        //   where[key as keyof T] = value;
        // }
        // const filtersArray = Object.entries(filters);
      }

      /**
       * 3. Search
       */
      if (search.keyword) {
        // where[search.field] = { [Op.like]: `%${search.keyword}%` };
        // search.field = { [Op.substring]: field };
        // for (const key in this.chooseModel.rawAttributes) {
        //   // const filters = [];
        //   const filtersArray = Object.entries(filters);
        //   console.log(key);
        //   filtersArray.push(sequelize.where(
        //     sequelize.cast(sequelize.col(key), 'varchar'),
        //     { [Op.iLike]: `%${search.keyword}%` }
        //   ));
        // }
      }
      /**
       * 4. Sort
       */
      // const querySort = {};
      const querySort: [string, string][] = [];
      if (sort) {
        querySort.push([sort.field as string, sort.order]);
      }

      const options = {
        ...queryPagination // limit + offset
        // order: querySort, // order
        // where: filters // search + filter
      };
      data = this.chooseModel.findAndCountAll(options);

      /**
       * n. cal total page & total rows
       */
      const calTotalPage = (await data).count / pagination.limit;
      const calRows = (await data).count;

      return {
        totalPage: Math.ceil(calTotalPage),
        totalRows: calRows,
        rows: (await data).rows
      };
    } catch (error) {
      throw new NotFoundError(`Not found or error get list ${this.chooseModel}::${error}`);
    }
  }

  async optionsParse({ filters, search, sort, pagination }: GetAllProductsByQueryOptionsQueryState) {
    const filtersParse = jsonUtils.jsonParse(filters, {});
    const searchParse = jsonUtils.jsonParse(search, {});
    const sortParse = jsonUtils.jsonParse(sort, {});
    const paginationParse = jsonUtils.jsonParse(pagination, {});
    return {
      filters: filtersParse,
      search: searchParse,
      sort: sortParse,
      pagination: paginationParse
    };
  }

  async deleteMany(values: number[] | number, transaction?: Transaction) {
    const where: WhereOptions = { id: values };
    return await this.chooseModel.destroy({ where, transaction });
  }

  async deleteAll(truncate?: boolean, transaction?: Transaction) {
    const where: WhereOptions = {};
    return await this.chooseModel.destroy({ where, truncate, transaction });
  }

  // async findByPk(id: number, options?: Omit<FindOptions<Attributes<T>>, 'where'>) {
  //   return this.chooseModel.findByPk(id, options);
  // }

  // async getListOrder(queryOptions: QueryOptions<T>): Promise<T[]> {
  //   const { filters, search, sort, pagination } = queryOptions;

  //   const where: WhereOptions<T> = {};

  //   // 📌 1️⃣ Xử lý bộ lọc (filters)
  //   if (filters) {
  //     for (const [key, value] of Object.entries(filters)) {
  //       where[key as keyof T] = value;
  //     }
  //   }

  //   // 📌 2️⃣ Xử lý tìm kiếm (search)
  //   if (search) {
  //     where[search.field] = { [Op.like]: `%${search.keyword}%` };
  //   }

  //   // 📌 3️⃣ Xử lý sắp xếp (sort)
  //   const order: [string, string][] = [];
  //   if (sort) {
  //     order.push([sort.field as string, sort.order]);
  //   }

  //   // 📌 4️⃣ Xử lý phân trang (pagination)
  //   let offset = 0,
  //     limit = 10;
  //   if (pagination) {
  //     limit = pagination.limit;
  //     offset = (pagination.page - 1) * limit;
  //   }

  //   // 📌 5️⃣ Thực thi truy vấn
  //   const options: FindOptions<T> = {
  //     where,
  //     order,
  //     limit,
  //     offset
  //   };

  //   return this.chooseModel.findAll(options) as Promise<T[]>;
  // }
}

export const productOptionsQuery = new QueryOptionsByBuilder<ProductModel>(ProductModel);
export const productVariantValuesOptionsQuery = new QueryOptionsByBuilder<ProductVariantValuesModel>(
  ProductVariantValuesModel
);
export const variantValuesOptionsQuery = new QueryOptionsByBuilder<VariantValuesModel>(VariantValuesModel);
export const variantKeysOptionsQuery = new QueryOptionsByBuilder<VariantKeysModel>(VariantKeysModel);
export const attributeValuesOptionsQuery = new QueryOptionsByBuilder<AttributeValuesModel>(AttributeValuesModel);
export const productAttributeValuesOptionsQuery = new QueryOptionsByBuilder<ProductAttributeValuesModel>(
  ProductAttributeValuesModel
);

export const orderOptionsQuery = new QueryOptionsByBuilder<OrderModel>(OrderModel);
