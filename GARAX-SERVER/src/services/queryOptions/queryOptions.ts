import { QueryOptions } from '@/common/interfaces';
import { NotFoundError } from '@/middlewares';
import { Model, ModelStatic } from 'sequelize';

export class QueryOptionsByBuilder<T extends Model> {
  constructor(private chooseModel: ModelStatic<T>) {}

  async getList(
    queryOptions: QueryOptions<T>
    // queryValues: ParamQueryMustHave
  ) {
    let data;
    const {
      // filters,
      // search,
      // sort,
      pagination
    } = queryOptions;
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
       */
      const queryFilter = {};
      /**
       * 3. Search
       */
      const querySearch = {};
      /**
       * 4. Sort
       */
      const querySort = {};
      /**
       * 3. cal toal page
       */
      const calTotalPage = {};
      /**
       * . countAll
       */
      const options = {
        ...queryPagination,
        ...queryFilter,
        ...querySearch,
        ...querySort
      };
      data = this.chooseModel.findAll(options) as Promise<T[]>;

      return {
        totalPage: calTotalPage,
        totalRows: 0,
        rows: data
      };
    } catch (error) {
      throw new NotFoundError(`Not found or error get list ${this.chooseModel}::${error}`);
    }
  }

  // async getList(queryOptions: QueryOptions<T>): Promise<T[]> {
  //   const { filters, search, sort, pagination } = queryOptions;

  //   let where: WhereOptions<T> = {};

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
  //   let order: [string, string][] = [];
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
  //     offset,
  //   };

  //   return this.model.findAll(options) as Promise<T[]>;
  // }
}
