import { 
    AxiosResponse 
} from "axios";
import { 
    BASE 
} from "./bases/baseUrl";
import { 
    ver_API, 
    ROUTES_PRODUCTS
} from "./constants";
import API_CONFIG from '../api/config/axios.config';
import { 
    ProductDetailResponse, 
    ProductListResponse 
} from "./responses";
import { 
    ProductDetailRequest,
    ProductVariantDetailRequest,
    ProductViewestByLimitRequest
} from "./requests/product";

export const BASE_PRODUCT_LIST = `${BASE(ver_API, ROUTES_PRODUCTS)}`;
export const BASE_PRODUCT_VIEWEST = `${BASE(ver_API, ROUTES_PRODUCTS)}/viewest`;
export const BASE_PRODUCT_DETAIL = BASE_PRODUCT_LIST;

export const BASE_PRODUCT_VARIANT_DETAIL = `${BASE(ver_API, ROUTES_PRODUCTS)}`;

class ProductAPI {
    async list()
    : Promise<AxiosResponse<ProductListResponse>>  {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST
        );
    }

    async viewestByLimit(data: ProductViewestByLimitRequest)
    : Promise<AxiosResponse<ProductListResponse>>  {
        return API_CONFIG.get(
            `${BASE_PRODUCT_VIEWEST}/${data.limit}`,
        );
    }

    async detail(data: ProductDetailRequest)
    : Promise<AxiosResponse<ProductDetailResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_DETAIL}/${data.id}`,
        );
    }
}

class ProductVariantAPI {
    async detail(data: ProductVariantDetailRequest): Promise<AxiosResponse<ProductDetailResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_VARIANT_DETAIL}/${data.id}`,
        );
    }
}

export const productApi: ProductAPI = new ProductAPI();
export const productVariantApi: ProductVariantAPI = new ProductVariantAPI();