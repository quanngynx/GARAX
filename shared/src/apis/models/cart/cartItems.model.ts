import { PrimaryKey } from '@/api/bases';

export interface CartItems 
extends PrimaryKey {
  qty: number;
  cartId: number;
  productVariantId: number;
  createdAt: Date;
  updatedAt: Date;
//   product_variant_values?: ProductVariantValues;
}