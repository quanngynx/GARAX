import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductListRequest } from "@/apis/requests/products";
import { ProductListMetadata, ProductListResponse } from "@/apis/responses";
import { productQueryKey } from "@/apis/constants";
import { productApi } from "@/apis/productUrl";

interface Props {
    request: ProductListRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductListResponse, AxiosError>} query result
 */
export function useGetProductsList({ 
    request 
}: Props): UseQueryResult<ProductListResponse, AxiosError> {
    return useQuery<ProductListResponse, AxiosError>({
        queryKey: productQueryKey.LIST(request),
        queryFn: async ({ signal }) => {
            const response = await productApi.list(request, signal);
            console.log("📌 response:", response.data);

            return response.data
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
