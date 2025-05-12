import { QueryKey } from '@tanstack/react-query';
import { 
    ProductDetailRequest, 
    ProductListOtherRequest, 
    ProductListRequest, 
    ProductListSparePartRequest, 
    ProductListSupportToolsRequest 
} from '../requests/product';
import { 
    OrderListRequest 
} from '../requests/orders';
import { 
    CartAdditionRequest 
} from '../requests/cart';

class ProductQueryKey {
    LIST = (request: ProductListRequest): QueryKey => ['products', request];
    LIST_PUBLISH = (request: ProductListRequest): QueryKey => ['products-publish', request];
    LIST_PUBLISH_SPARE_PART = (request: ProductListSparePartRequest): QueryKey => ['products-spare-part', request];
    LIST_PUBLISH_SUPPORT_TOOL = (request: ProductListSupportToolsRequest): QueryKey => ['products-support-tools', request];
    LIST_PUBLISH_OTHER = (request: ProductListOtherRequest): QueryKey => ['products-others', request];
      
    DETAILS = (request: ProductDetailRequest): QueryKey => ['products-detail', request];
}

class OrderQueryKey {
    LIST = (request: OrderListRequest): QueryKey => ['orders', request];
}

class CartQueryKey {
    ADD = (request: CartAdditionRequest): QueryKey => ['carts', request];
}

export const productQueryKey: ProductQueryKey = new ProductQueryKey();
export const orderQueryKey: OrderQueryKey = new OrderQueryKey();
export const cartQueryKey: CartQueryKey = new CartQueryKey();
