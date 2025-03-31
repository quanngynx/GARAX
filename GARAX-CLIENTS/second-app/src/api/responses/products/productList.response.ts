import { BaseResponse } from "@/api/bases/response";
import { ProductModel } from "@/api/models";

export type ProductListMetadata = ProductModel

export type ProductListResponse =
BaseResponse<ProductListMetadata[]>;

