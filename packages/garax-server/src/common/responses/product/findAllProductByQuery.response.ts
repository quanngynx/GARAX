import { ProductModel } from '@/models';

export interface FindAllProductByQueryResponse {
  rows: ProductModel[];
  count: number;
}
