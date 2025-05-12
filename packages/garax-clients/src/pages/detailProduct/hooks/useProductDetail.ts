import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { productQueryKey } from "@/api/constants";
import { ProductDetailResponse } from "@/api/responses";
import { productApi } from "@/api/urls/productUrl";
import { ProductDetailRequest } from "@/api/requests/product";

interface Props {
    request: ProductDetailRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<ProductDetailResponse, AxiosError>} query result
 */
export function useProductDetail({ 
    request 
}: Props): UseQueryResult<ProductDetailResponse, AxiosError> {
    return useQuery<ProductDetailResponse, AxiosError>({
        queryKey: productQueryKey.DETAILS(request),
        queryFn: async () => {
            const response = await productApi.detail(request);
            // console.log("response:", response.data.metadata);
            return response.data
        },
        // enabled: 
        //     accessToken !== null &&
        //     request.pageIndex !== undefined &&
        //     request.pageSize !== undefined,
        // retry: axiosErrorRetryPolicy,
    });
}
