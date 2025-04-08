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
import { CartAdditionResponse } from './responses/cart';

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

    async checkout(data: CartCheckoutRequest) {
        return API_CONFIG.post(
            BASE_CART_ADD,
            data
        );
    }

    async detail(data: CartDetailRequest) {
        return API_CONFIG.get(
            `${BASE_CART_DETAIL}/${data.id}`
        );
    }

    async delete(data: CartDeletionRequest) {
        return API_CONFIG.get(
            `${BASE_CART_DELETE}/${data.id}`
        );
    }
}

export const cartApi: CartAPI = new CartAPI();