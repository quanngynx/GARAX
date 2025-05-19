import { bookingApi } from "@/apis/bookingUrl";
import { bookingQueryKey } from "@/apis/constants";
import { BookingListRequest } from "@/apis/requests/bookings/bookingList.request";
import { BookingListResponse } from "@/apis/responses";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props {
    request: BookingListRequest;
}

export function useGetBookingList({ 
    request 
}: Props): UseQueryResult<BookingListResponse, AxiosError> {
    return useQuery<BookingListResponse, AxiosError>({
        queryKey: bookingQueryKey.LIST(request),
        queryFn: async ({ signal }) => {
            const response = await bookingApi.list(request, signal);
            console.log("📌 response:", response);

            return response.data
        },
        
    });
}