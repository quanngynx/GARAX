import { Audit } from "../audit.interface";
import { PrimaryKey } from "../primaryKey.interface";
import { Product } from "./product.interface";

export interface ProductVariantValues
extends Audit, PrimaryKey{
  price: number;
  oldPrice: number
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: BigInt;
  productId: number;
  productVariantId: number;
  addOverDetailSpecsId: number;
  products?: Product;
}
