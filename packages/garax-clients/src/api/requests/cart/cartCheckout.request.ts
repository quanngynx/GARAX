import { CartItems, Order } from "@/api/models";

export interface CartCheckoutRequest
extends Pick<CartItems,
| 'cartId'
>, Pick<Order,
| 'total' 
| 'isReceiveAtStore' 
| 'shippingFee' 
| 'discount' 
| 'paymentMethod' 
| 'paymentStatus' 
| 'addressId'
> {}