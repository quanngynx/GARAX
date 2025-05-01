import { ProductModel } from '@/models';

export interface GetViewestProductResponse {
  limit: number;
  result: ProductModel[];
}
