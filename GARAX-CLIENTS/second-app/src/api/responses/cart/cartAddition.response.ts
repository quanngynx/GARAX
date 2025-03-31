import { BaseResponse } from "@/api/bases/response";
import { Cart, CartItems, ProductModel, ProductVariantValues } from "@/api/models";

type ProductAdditionMetadata = Pick<ProductModel,
| 'id'
| 'name'
| 'videoId'
| 'desc'>;

interface ProductVariantValuesAdditionMetadata
extends ProductVariantValues {
  products: ProductAdditionMetadata
}
interface CartItemsAdditionMetadata 
extends Pick<CartItems,
| 'productVariantId'
| 'qty'> {
  product_variant_values: ProductVariantValuesAdditionMetadata
}

interface CartAdditionMetadata
extends Cart {
  cart_items: CartItemsAdditionMetadata[];
}

export interface InfoCartAdditionMetadata {
  infoCart: CartAdditionMetadata;
}

export type CartAdditionResponse = 
BaseResponse<CartAdditionMetadata>
