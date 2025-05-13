import { QueryOptions } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQuery } from '@/controllers/product.controller';
import { ProductModel } from '@/models';

export type GetAllProductsByQueryOptions = QueryOptions<ProductModel>;

export type GetAllProductsRequest = Pick<
  GetAllProductsByQueryOptionsQuery,
  'filters' | 'search' | 'sort' | 'pagination'
>;
