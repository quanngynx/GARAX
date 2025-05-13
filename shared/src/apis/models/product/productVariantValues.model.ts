import { Audit, PrimaryKey } from "@/api/bases";

export interface ProductVariantValues 
extends Audit, PrimaryKey {
  price: number;
  oldPrice: number;
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: bigint;
  productId: number;
  productVariantId: number;
  addOverDetailSpecsId: number;
}