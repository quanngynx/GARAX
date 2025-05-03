import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { OrderListResponse } from "@/apis/responses";
import { orderQueryKey } from "@/apis/constants";
import { OrderListRequest } from "@/apis/requests/orders";
import { orderApi } from "@/apis/orderUrl";

interface Props {
    request: OrderListRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<OrderListResponse, AxiosError>} query result
 */
export function useGetOrdersList({ 
    request 
}: Props): UseQueryResult<OrderListResponse, AxiosError> {
    return useQuery<OrderListResponse, AxiosError>({
        queryKey: orderQueryKey.LIST(request),
        queryFn: async ({ signal }) => {
            const response = await orderApi.list(request, signal);
            return response.data
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
