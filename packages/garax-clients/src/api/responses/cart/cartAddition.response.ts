import { BaseResponse } from "@/api/bases/response";
import { Cart, CartItems } from "@/api/models";

// type ProductAdditionMetadata = Pick<ProductModel,
// | 'id'
// | 'name'
// | 'videoId'
// | 'desc'>;

// interface ProductVariantValuesAdditionMetadata
// extends ProductVariantValues {
//   products: ProductAdditionMetadata
// }

type CartItemsAdditionMetadata = Pick<CartItems,
| 'id'
| 'qty'
| 'cartId'
| 'productVariantId'
>

type CartExistAdditionMetadata = Pick<Cart,
| 'id'
| 'sessionId'
| 'userId'
>
// export interface InfoCartAdditionMetadata {
//   infoCart: CartAdditionMetadata;
// }

interface CartAdditionMetadata
extends Cart {
  isExistCart: CartExistAdditionMetadata;
  cart_items: CartItemsAdditionMetadata[];
}

export type CartAdditionResponse = 
BaseResponse<CartAdditionMetadata>
