import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productQueryKey } from "@/api/constants";
import { productApi } from "@/api/productUrl";
import { ProductListRequest } from "@/api/requests/product";
import { ProductListMetadata } from "@/api/responses";

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
