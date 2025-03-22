import { Audit } from "../audit.interface";

export interface ProductVariantValues
extends Audit{
  id: string;
  price: number;
  oldPrice: number
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: BigInt;
  productId: number;
  productVariantId: number;
  addOverDetailSpecsId: number;
}
