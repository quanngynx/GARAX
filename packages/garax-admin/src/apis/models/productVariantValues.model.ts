import { Audit } from "../interfaces";

export interface ProductVariantValuesModel
extends Audit{
  id: string;
  price: number;
  oldPrice: number
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: bigint;
  productId: string;
  addOverSpecsId: string;
  addOverDetailSpecsId: string;
}
