import { CartItems, Order } from '@/common/interfaces';

export interface CheckoutCartRequest
  extends Pick<CartItems, 'cartId'>,
    Pick<
      Order,
      'total' | 'isReceiveAtStore' | 'shippingFee' | 'discount' | 'paymentMethod' | 'paymentStatus' | 'addressId'
    > {
  desc?: string;
}
