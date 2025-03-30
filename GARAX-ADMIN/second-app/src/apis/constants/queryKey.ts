import { QueryKey } from '@tanstack/react-query';
import { ProductDetailRequest, ProductListRequest } from '../requests/products';

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

export const productQueryKey: ProductQueryKey = new ProductQueryKey();
