import { BaseResponse } from "@/apis/bases/response";
import { ProductModel } from "@/apis/models";

export type ProductListMetadata = ProductModel

export type ProductListResponse =
BaseResponse<ProductListMetadata[]>;

