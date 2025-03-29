import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductListRequest } from "@/apis/requests/products";
import { ProductListMetadata } from "@/apis/responses";
import { productQueryKey } from "@/apis/constants";
import { productApi } from "@/apis/productUrl";

interface Props {
    request: ProductListRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductListMetadata[], AxiosError>} query result
 */
export function useGetProductsList({ 
    request 
}: Props): UseQueryResult<ProductListMetadata[], AxiosError> {
    return useQuery<ProductListMetadata[], AxiosError>({
        queryKey: productQueryKey.LIST(request),
        queryFn: async ({ signal }) => {
            const response = await productApi.list(request, signal);
            // console.log("📌 response:", response.data.metadata);

            return response.data.metadata
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
