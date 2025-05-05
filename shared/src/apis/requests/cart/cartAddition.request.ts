import { Cart, CartItems } from "@/api/models";

export type ProductVariantItems = Pick<CartItems,
| 'productVariantId'
| 'qty'
>

export interface CartAdditionRequest
extends Pick<Cart,
| 'userId'
> {
    productVariantItems: ProductVariantItems
}