import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { cartQueryKey } from "@/api/constants";
import { CartAdditionResponse } from "@/api/responses/cart";
import { cartApi } from "@/api/cartUrl";
import { CartAdditionRequest } from "@/api/requests/cart";

interface Props {
    request: CartAdditionRequest;
}
/**
 * Hooks for fetching active paged list
 * @param {Props} props component properties
 * @returns {UseQueryResult<CartAdditionResponse, AxiosError>} query result
 */
export function useAddToCart({ 
    request 
}: Props): UseQueryResult<CartAdditionResponse, AxiosError> {
    return useQuery<CartAdditionResponse, AxiosError>({
        queryKey: cartQueryKey.ADD(request),
        queryFn: async () => {
            const response = await cartApi.add(request);
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
