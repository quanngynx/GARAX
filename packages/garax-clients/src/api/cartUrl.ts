import { AxiosResponse } from 'axios';
import API_CONFIG from '../api/config/axios.config';
import { 
    BASE 
} from "./bases";
import { 
    ROUTES_CART, 
    ver_API 
} from "./constants";
import { 
    CartAdditionRequest, 
    CartCheckoutRequest, 
    CartDeletionRequest, 
    CartDetailRequest 
} from './requests/cart';
import { CartAdditionResponse, CartCheckoutResponse, CartDetailResponse } from './responses/cart';

export const BASE_CART_ADD = `${BASE(ver_API, ROUTES_CART)}`;
export const BASE_CART_CHECKOUT = `${BASE(ver_API, ROUTES_CART)}/checkout`;
export const BASE_CART_DETAIL = BASE_CART_ADD;
export const BASE_CART_DELETE = BASE_CART_ADD;

class CartAPI {
    async add(data: CartAdditionRequest)
    : Promise<AxiosResponse<CartAdditionResponse>> {
        return API_CONFIG.post(
            BASE_CART_ADD,
            data
        );
    }

    async detail(data: CartDetailRequest)
    : Promise<AxiosResponse<CartDetailResponse>> {
        return API_CONFIG.get(
            `${BASE_CART_DETAIL}/${data.id}`
        );
    }

    async delete(data: CartDeletionRequest) {
        return API_CONFIG.delete(
            `${BASE_CART_DELETE}/${data.id}`
        );
    }

    async checkout(data: CartCheckoutRequest)
    : Promise<AxiosResponse<CartCheckoutResponse>> {
        return API_CONFIG.post(
            BASE_CART_ADD,
            data
        );
    }
}

export const cartApi: CartAPI = new CartAPI();