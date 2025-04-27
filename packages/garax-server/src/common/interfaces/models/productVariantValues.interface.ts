/* eslint-disable @typescript-eslint/no-explicit-any */
import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';
import { Product } from './product.interface';

export interface ProductVariantValues extends Audit, PrimaryKey {
  [x: string]: any;
  price: number;
  oldPrice: number;
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: bigint;
  productId: number;
  productVariantId: number;
  addOverDetailSpecsId: number;
  products?: Product;
}
