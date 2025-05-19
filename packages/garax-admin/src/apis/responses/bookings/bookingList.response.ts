import { BaseResponse } from "@/apis/bases/response";
import { BookingModel } from "@/apis/models";

export type BookingListMetadata = BookingModel

export type BookingListResponse =
BaseResponse<BookingListMetadata[]>;
