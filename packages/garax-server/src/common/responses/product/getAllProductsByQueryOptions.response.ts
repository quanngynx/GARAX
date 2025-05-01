import { QueryOptions } from '@/common/interfaces';
import { ProductModel } from '@/models';

export type GetAllProductsByQueryOptions = QueryOptions<ProductModel>;

export interface GetAllProductsByQueryOptionsResponse {
  totalPage: number;
  totalRows: number;
  rows: ProductModel[];
}
