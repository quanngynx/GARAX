import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productQueryKey } from "@/api/constants";
import { productApi } from "@/api/urls/productUrl";
import { ProductListSparePartRequest } from "@/api/requests/product";
import { ProductListSparePartResponse } from "@/api/responses";

interface Props {
    request: ProductListSparePartRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductListSparePartResponse, AxiosError>} query result
 */
export function useGetProductsListSparePart({ 
    request 
}: Props): UseQueryResult<ProductListSparePartResponse, AxiosError> {
    return useQuery<ProductListSparePartResponse, AxiosError>({
        queryKey: productQueryKey.LIST_PUBLISH_SPARE_PART(request),
        queryFn: async ({ signal }) => {
            const response = await productApi.listPublishSparePart(request, signal);
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
