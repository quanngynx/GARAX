import { BaseResponse } from "@/api/bases/response";
import { ProductModel } from "@/api/models";

export type ProductListSupportToolsMetadata = ProductModel

export type ProductListSupportToolsResponse =
BaseResponse<ProductListSupportToolsMetadata[]>;
