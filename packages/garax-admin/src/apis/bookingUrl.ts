import { 
    BASE 
} from "./bases/baseUrl"
import { 
    ROUTES_BOOKINGS,
    ver_API, 
} from "./constants";
import { AxiosResponse } from "axios";
import { BookingListRequest } from "./requests/bookings/bookingList.request";
import { BookingListResponse } from "./responses/bookings/bookingList.response";
import API_CONFIG from '@/utils/axios';

export const BASE_BOOKING_LIST = `${BASE(ver_API,  ROUTES_BOOKINGS)}/all`;
export const BASE_BOOKING_ADD = `${BASE(ver_API,  ROUTES_BOOKINGS)}`;
class BookingAPI {
    async list(request: BookingListRequest, signal?: AbortSignal)
    : Promise<AxiosResponse<BookingListResponse>> {
        const response = API_CONFIG.get(
            BASE_BOOKING_LIST,
            {
                params: request,
                signal
            }
        );
        return response;
    }

    // async add(request: BookingAddRequest, signal?: AbortSignal)
    // : Promise<AxiosResponse<BookingAddResponse>> {
    //     const response = API_CONFIG.post(
    //         BASE_BOOKING_ADD,
    //         request,
    //         { signal }
    //     );
    //     return response;
    // }
}

export const bookingApi: BookingAPI = new BookingAPI();