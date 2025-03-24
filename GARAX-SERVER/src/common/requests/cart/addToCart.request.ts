import { Cart, CartItems } from '@/common/interfaces';

type ProductVariantItems = Pick<CartItems, 'productVariantId' | 'qty'>;

export interface AddToCartRequest extends Pick<Cart, 'userId'> {
  productVariantItems: ProductVariantItems;
}
