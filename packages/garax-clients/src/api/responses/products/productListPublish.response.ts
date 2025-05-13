import { BaseResponse } from "@/api/bases/response";
import { ProductModel } from "@/api/models";

export type ProductListPublishMetadata = ProductModel

export type ProductListPublishResponse =
BaseResponse<ProductListPublishMetadata[]>;

