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
import API_CONFIG from '@/utils/axios';
import { 
    CategoryProductsCreationResponse,
    ProductDetailResponse, 
    ProductListResponse, 
} from "./responses";
import { 
    ProductViewestByLimitRequest, 
    ProductDetailRequest, 
} from "./requests/products";
import { CategoryProductsCreationRequest } from "./requests/categoryProducts";


export const BASE_CATEGORY_PRODUCT_LIST = `${BASE(ver_API, ROUTES_PRODUCTS)}`;
export const BASE_CATEGORY_PRODUCT_VIEWEST = `${BASE(ver_API, ROUTES_PRODUCTS)}/viewest`;
export const BASE_CATEGORY_PRODUCT_CREATE = BASE_CATEGORY_PRODUCT_LIST;

export const BASE_PRODUCT_VARIANT_DETAIL = `${BASE(ver_API, ROUTES_PRODUCTS)}`;

class CategoryProductAPI {
    async list()
    : Promise<AxiosResponse<ProductListResponse>>  {
        return API_CONFIG.get(
            BASE_PRODUCT_LIST
        );
    }

    async create(data: CategoryProductsCreationRequest)
    : Promise<AxiosResponse<CategoryProductsCreationResponse>> {
        return API_CONFIG.post(
            `${BASE_PRODUCT_DETAIL}/${data.id}`,
        );
    }
}

export const productApi: CategoryProductAPI = new CategoryProductAPI();