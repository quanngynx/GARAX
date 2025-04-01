import { QueryKey } from '@tanstack/react-query';
import { ProductDetailRequest, ProductListRequest } from '../requests/product';
import { OrderListRequest } from '../requests/orders';
import { CartAdditionRequest } from '../requests/cart';

class ProductQueryKey {
    LIST = (request: ProductListRequest): QueryKey => [
        'products',
        request, 
    ];
      
    DETAILS = (request: ProductDetailRequest): QueryKey => [
        'products',
        request, 
    ];
}

class OrderQueryKey {
    LIST = (request: OrderListRequest): QueryKey => [
        'orders',
        request, 
    ];
      
    // DETAILS = (request: OrderDetailRequest): QueryKey => [
    //     'orders',
    //     request, 
    // ];
}

class CartQueryKey {
    ADD = (request: CartAdditionRequest): QueryKey => [
        'carts',
        request, 
    ];
}

export const productQueryKey: ProductQueryKey = new ProductQueryKey();
export const orderQueryKey: OrderQueryKey = new OrderQueryKey();
export const cartQueryKey: CartQueryKey = new CartQueryKey();
