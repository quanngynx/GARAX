import { 
    BASE 
} from "./bases/baseUrl";
import { 
    ROUTES_BRANDS,
    ver_API, 
} from "./constants";
import API_CONFIG from '@/utils/axios';
import { BrandListRequest } from "./requests/brands";
import { AxiosResponse } from "axios";
import { BrandListResponse } from "./responses";

export const BASE_BRAND_LIST = `${BASE(ver_API, ROUTES_BRANDS)}/all`;
// export const BASE_PRODUCT_VIEWEST = `${BASE(ver_API, ROUTES_BRANDS)}/viewest`;
// export const BASE_PRODUCT_DETAIL = BASE_PRODUCT_LIST;
// export const BASE_PRODUCT_VARIANT_DETAIL = `${BASE(ver_API, ROUTES_BRANDS)}`;

class BrandAPI {
    async list(request: BrandListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<BrandListResponse>> {
        const response = API_CONFIG.get(
            BASE_BRAND_LIST,
            {
                params: request,
                signal
            }
        );
        return response;
    }
}
export const brandApi: BrandAPI = new BrandAPI();