import { 
    AxiosResponse 
} from "axios";
import { 
    BASE 
} from "../bases/baseUrl";
import { 
    ver_API, 
    ROUTES_PRODUCTS
} from "../constants";
import API_CONFIG from '../config/axios.config';
import { 
    ProductDetailResponse,
    ProductListOtherResponse,
    ProductListPublishResponse,
    ProductListResponse,
    ProductListSparePartResponse,
    ProductListSupportToolsResponse, 
    // ProductListResponse 
} from "../responses";
import { 
    ProductDetailRequest,
    ProductFindByQueryRequest,
    ProductListOtherRequest,
    ProductListRequest,
    ProductListSparePartRequest,
    ProductListSupportToolsRequest,
    ProductVariantDetailRequest,
    ProductViewestByLimitRequest
} from "../requests/product";

export const BASE_PRODUCT_LIST = 
`${BASE(ver_API, ROUTES_PRODUCTS)}`;

export const BASE_PRODUCT_LIST_PUBLIST = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/pub`;

export const BASE_PRODUCT_LIST_PUBLIST_SPARE_PART = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/spare-part/viewest`;

export const BASE_PRODUCT_LIST_PUBLIST_SUPPORT_TOOL = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/support-tools/viewest`;

export const BASE_PRODUCT_LIST_PUBLIST_OTHER = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/others/viewest`;

export const BASE_PRODUCT_VIEWEST = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/viewest`;

export const BASE_PRODUCT_FIND = 
`${BASE(ver_API, ROUTES_PRODUCTS)}/find`;

export const BASE_PRODUCT_DETAIL = BASE_PRODUCT_LIST;

export const BASE_PRODUCT_VARIANT_DETAIL = `${BASE(ver_API, ROUTES_PRODUCTS)}`;

class ProductAPI {
    async list(request: ProductListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListResponse>> {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST,
            {
                params: request,
                signal
            }
        );
    }

    async listPublish(request: ProductListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListPublishResponse>> {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST_PUBLIST,
            {
                params: request,
                signal
            }
        );
    }

    async listPublishSparePart(request: ProductListSparePartRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListSparePartResponse>> {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST_PUBLIST_SPARE_PART,
            {
                params: request,
                signal
            }
        );
    }

    async listPublishSupportTools(request: ProductListSupportToolsRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListSupportToolsResponse>> {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST_PUBLIST_SUPPORT_TOOL,
            {
                params: request,
                signal
            }
        );
    }

    async listPublishOther(request: ProductListOtherRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListOtherResponse>> {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST_PUBLIST_OTHER,
            {
                params: request,
                signal
            }
        );
    }

    async viewestByLimit(data: ProductViewestByLimitRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_VIEWEST}/${data.limit}`,
            {
                signal
            }
        );
    }

    async find(data: ProductFindByQueryRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<ProductListResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_FIND}?keyword=${data.keyword}&limit=${data.limit}&offset=${data.offset}`,
            {
                signal
            }
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
    async detail(data: ProductVariantDetailRequest)
    : Promise<AxiosResponse<ProductDetailResponse>> {
        return API_CONFIG.get(
            `${BASE_PRODUCT_VARIANT_DETAIL}/${data.id}`,
        );
    }
}

export const productApi: ProductAPI = new ProductAPI();
export const productVariantApi: ProductVariantAPI = new ProductVariantAPI();