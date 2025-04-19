import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BrandListResponse } from "@/apis/responses";
import { orderQueryKey } from "@/apis/constants";
import { OrderListRequest } from "@/apis/requests/orders";
import { brandApi } from "@/apis/brandUrl";

interface Props {
    request: OrderListRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<BrandListResponse, AxiosError>} query result
 */
export function useGetBrandsList({ 
    request 
}: Props): UseQueryResult<BrandListResponse, AxiosError> {
    return useQuery<BrandListResponse, AxiosError>({
        queryKey: orderQueryKey.LIST(request),
        queryFn: async ({ signal }) => {
            const response = await brandApi.list(request, signal);
            // console.log("📌 response:", response.data.metadata);
            return response.data
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
