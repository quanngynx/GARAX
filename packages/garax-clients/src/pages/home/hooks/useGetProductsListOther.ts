import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productQueryKey } from "@/api/constants";
import { productApi } from "@/api/urls/productUrl";
import { ProductListOtherRequest } from "@/api/requests/product";
import { ProductListOtherResponse } from "@/api/responses";

interface Props {
    request: ProductListOtherRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductListOtherResponse, AxiosError>} query result
 */
export function useGetProductsListOther({ 
    request 
}: Props): UseQueryResult<ProductListOtherResponse, AxiosError> {
    return useQuery<ProductListOtherResponse, AxiosError>({
        queryKey: productQueryKey.LIST_PUBLISH_OTHER(request),
        queryFn: async ({ signal }) => {
            const response = await productApi.listPublishOther(request, signal);
            // console.log("response:", response.data);
            return response.data
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
