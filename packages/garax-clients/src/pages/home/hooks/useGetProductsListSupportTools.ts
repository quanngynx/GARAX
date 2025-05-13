import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productQueryKey } from "@/api/constants";
import { productApi } from "@/api/urls/productUrl";
import { ProductListSupportToolsRequest } from "@/api/requests/product";
import { ProductListSupportToolsResponse } from "@/api/responses";

interface Props {
    request: ProductListSupportToolsRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductListSparePartResponse, AxiosError>} query result
 */
export function useGetProductsListSupportTools({ 
    request 
}: Props): UseQueryResult<ProductListSupportToolsResponse, AxiosError> {
    return useQuery<ProductListSupportToolsResponse, AxiosError>({
        queryKey: productQueryKey.LIST_PUBLISH_SUPPORT_TOOL(request),
        queryFn: async ({ signal }) => {
            const response = await productApi.listPublishSupportTools(request, signal);
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
