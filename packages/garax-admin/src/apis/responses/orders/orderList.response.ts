import { BaseResponse } from "@/apis/bases/response";
import { OrderModel } from "@/apis/models";

export type OrderListMetadata = OrderModel

export type OrderListResponse =
BaseResponse<OrderListMetadata[]>;

