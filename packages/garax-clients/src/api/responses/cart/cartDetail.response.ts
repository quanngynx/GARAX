import { BaseResponse } from "@/api/bases/response";
import { Cart, CartItems } from "@/api/models";

type FindCartByIdMetadata = Pick<Cart,
| 'id'
| 'sessionId'
| 'userId'
| 'createdAt'
| 'updatedAt'
>

type CartItemsMetadata = Pick<CartItems,
| 'id'
| 'qty'
| 'cartId'
| 'productVariantId'
| 'createdAt'
| 'updatedAt'
>

interface CartDetailMetadata {
    findCartById: FindCartByIdMetadata;
    cartItems: CartItemsMetadata;
}

export type CartDetailResponse = 
BaseResponse<CartDetailMetadata>;