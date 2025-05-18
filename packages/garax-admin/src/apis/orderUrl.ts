import { 
    AxiosResponse 
} from "axios";
import { 
    BASE 
} from "./bases/baseUrl";
import { 
    ROUTES_ORDERS,
    ver_API, 
} from "./constants";
import API_CONFIG from '@/utils/axios';
import { OrderListRequest, TransactionsListRequest } from "./requests/orders";
import { OrderListResponse } from "./responses";

export const BASE_ORDER_LIST = `${BASE(ver_API, ROUTES_ORDERS)}/all`;
// export const BASE_PRODUCT_VIEWEST = `${BASE(ver_API, ROUTES_ORDERS)}/viewest`;
// export const BASE_PRODUCT_DETAIL = BASE_PRODUCT_LIST;
// export const BASE_PRODUCT_VARIANT_DETAIL = `${BASE(ver_API, ROUTES_ORDERS)}`;
export const BASE_TRANSACTIONS_LIST = `${BASE(ver_API, "transactions")}/all`;

class OrderAPI {
    async list(request: OrderListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<OrderListResponse>> {
        const response = API_CONFIG.get(
            BASE_ORDER_LIST,
            {
                params: request,
                signal
            }
        );
        return response;
    }

    async listTransactions(request: TransactionsListRequest, signal?: AbortSignal) {
        const response = API_CONFIG.get(
            BASE_TRANSACTIONS_LIST,
            {
                params: request,
                signal
            }
        );
        return response;
    }
}
export const orderApi: OrderAPI = new OrderAPI();