import { BaseResponse } from "@/api/bases/response";
import { Order } from "@/api/models";

type NewOrderAdditionMetadata = Pick<Order,
| 'id'
| 'userId'
| 'cartId'
| 'total'
| 'fullname'
| 'phone'
| 'isReceiveAtStore'
| 'paymentMethod'
| 'paymentStatus'
| 'subTotalFromProd'
| 'shippingFee'
| 'discount'
| 'addressId'
| 'createdAt'
| 'updatedAt'
>

interface CartCheckoutMetadata {
  newOrder: NewOrderAdditionMetadata;
}

export type CartCheckoutResponse = 
BaseResponse<CartCheckoutMetadata>;
