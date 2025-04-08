import { QueryKey } from '@tanstack/react-query';
import { ProductDetailRequest, ProductListRequest } from '../requests/products';
import { OrderListRequest } from '../requests/orders';

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

export const productQueryKey: ProductQueryKey = new ProductQueryKey();
export const orderQueryKey: OrderQueryKey = new OrderQueryKey();
