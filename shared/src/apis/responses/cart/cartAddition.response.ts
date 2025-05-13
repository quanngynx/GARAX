import { BaseResponse } from "@/api/bases/response";
import { Cart, CartItems } from "@/api/models";

type CartExistAdditionMetadata = Pick<Cart,
| 'id'
| 'sessionId'
| 'userId'
| 'createdAt'
| 'updatedAt'
>

type CartItemsAdditionMetadata = Pick<CartItems,
| 'id'
| 'qty'
| 'cartId'
| 'productVariantId'
| 'createdAt'
| 'updatedAt'
>

interface CartAdditionMetadata
extends Cart {
  isExistCart: CartExistAdditionMetadata;
  cart_items: CartItemsAdditionMetadata[];
}

export type CartAdditionResponse = 
BaseResponse<CartAdditionMetadata>;
