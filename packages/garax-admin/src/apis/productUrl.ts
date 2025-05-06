import { 
    AxiosResponse 
} from "axios";
import { 
    BASE 
} from "./bases/baseUrl";
import { 
    ver_API, 
    ROUTES_PRODUCTS,
    ROUTES_PRODUCTS_VARIANT,
    ROUTES_PRODUCTS_ATTRIBUTE, 
} from "./constants";
import API_CONFIG from '@/utils/axios';
import { 
    FindAllProductByQueryResponse,
    ProductAdditionManyResponse,
    ProductAdditionResponse,
    ProductAttributeUpdateResponse,
    ProductDetailResponse, 
    ProductListResponse, 
    ProductUpdateResponse, 
    ProductVariantDetailResponse,
    ProductVariantUpdateResponse
} from "./responses";
import { 
    ProductViewestByLimitRequest, 
    ProductDetailRequest, 
    ProductVariantDetailRequest, 
    ProductListRequest,
    FindAllProductByQueryRequest,
    ProductAdditionRequest,
    ProductAdditionManyRequest,
    ProductAttributeUpdateRequest,
    ProductUpdateRequest,
    ProductVariantUpdateRequest
} from "./requests/products";

export const BASE_PRODUCT_LIST = `${BASE(ver_API, ROUTES_PRODUCTS)}`;
export const BASE_PRODUCT_VIEWEST = `${BASE(ver_API, ROUTES_PRODUCTS)}/viewest`;
export const BASE_PRODUCT_FIND = `${BASE(ver_API, ROUTES_PRODUCTS)}/find`;
export const BASE_PRODUCT_DETAIL = BASE_PRODUCT_LIST;
export const BASE_PRODUCT_ADD = BASE_PRODUCT_LIST;
export const BASE_PRODUCT_ADD_MANY = BASE_PRODUCT_LIST;
export const BASE_PRODUCT_UPDATE = BASE_PRODUCT_LIST;
export const BASE_PRODUCT_DELETE = BASE_PRODUCT_LIST;

export const BASE_PRODUCT_VARIANT = `${BASE(ver_API, ROUTES_PRODUCTS_VARIANT)}`;
export const BASE_PRODUCT_VARIANT_DETAIL = BASE_PRODUCT_VARIANT;
export const BASE_PRODUCT_VARIANT_UPDATE = BASE_PRODUCT_VARIANT;
export const BASE_PRODUCT_VARIANT_DELETE = BASE_PRODUCT_VARIANT;

export const BASE_PRODUCT_ATTRIBUTE = `${BASE(ver_API, ROUTES_PRODUCTS_ATTRIBUTE)}`;
export const BASE_PRODUCT_ATTRIBUTE_UPDATE = BASE_PRODUCT_ATTRIBUTE;
export const BASE_PRODUCT_ATTRIBUTE_DELETE = BASE_PRODUCT_ATTRIBUTE;

class ProductAPI {
    async list(request: ProductListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListResponse>> {
        const response = API_CONFIG.get(
            BASE_PRODUCT_LIST,
            {
                params: request,
                signal
            }
        );
        return response;
    }

    async viewestByLimit(data: ProductViewestByLimitRequest)
    : Promise<AxiosResponse<ProductListResponse>> {
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

    async find(data: FindAllProductByQueryRequest)
    : Promise<AxiosResponse<FindAllProductByQueryResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_FIND}?keyword=${data.keyword}&limit=${data.limit}&offset=${data.offset}`,
        );
    }

    async add(data: ProductAdditionRequest)
    : Promise<AxiosResponse<ProductAdditionResponse>> {
        return API_CONFIG.post(
            `${BASE_PRODUCT_ADD}`,
            data
        );
    }

    async addMany(data: ProductAdditionManyRequest)
    : Promise<AxiosResponse<ProductAdditionManyResponse>> {
        return API_CONFIG.post(
            `${BASE_PRODUCT_ADD_MANY}`,
            data
        );
    }

    async update(data: ProductUpdateRequest)
    : Promise<AxiosResponse<ProductUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_UPDATE}`,
            data
        );
    }

    async delete(data: ProductUpdateRequest)
    : Promise<AxiosResponse<ProductUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_DELETE}`,
            data
        );
    }
}

class ProductVariantAPI {
    async detail(data: ProductVariantDetailRequest)
    : Promise<AxiosResponse<ProductVariantDetailResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_VARIANT_DETAIL}/${data.id}`,
        );
    }

    async update(data: ProductVariantUpdateRequest)
    : Promise<AxiosResponse<ProductVariantUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_VARIANT_UPDATE}`,
            data
        );
    }

    async delete(data: ProductUpdateRequest)
    : Promise<AxiosResponse<ProductUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_VARIANT_DELETE}`,
            data
        );
    }
}

class ProductAttributeAPI {
    async update(data: ProductAttributeUpdateRequest)
    : Promise<AxiosResponse<ProductAttributeUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_ATTRIBUTE_UPDATE}`,
            data
        );
    }

    async delete(data: ProductUpdateRequest)
    : Promise<AxiosResponse<ProductUpdateResponse>> {
        return API_CONFIG.put(
            `${BASE_PRODUCT_ATTRIBUTE_DELETE}`,
            data
        );
    }
}

export const productApi: ProductAPI = new ProductAPI();
export const productVariantApi: ProductVariantAPI = new ProductVariantAPI();
export const productAttributeApi: ProductAttributeAPI = new ProductAttributeAPI();
