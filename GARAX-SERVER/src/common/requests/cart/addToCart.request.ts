import { Cart, CartItems } from "@/common/interfaces";

interface ProductVariantItems
extends Pick<CartItems,
| 'productVariantId'
| 'qty'
> {}

export interface AddToCartRequest
extends Pick<Cart,
| 'userId'
> {
  productVariantItems: ProductVariantItems;
}
