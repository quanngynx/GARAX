import { Cart } from "@/common/interfaces";

export interface AddToCartRequest
extends Pick<Cart,
| 'userId'
> {
  productItems: any;
}
