import { BaseResponse } from "@/api/bases/response";
import { ProductModel } from "@/api/models";

export type ProductListOtherMetadata = ProductModel

export type ProductListOtherResponse =
BaseResponse<ProductListOtherMetadata[]>;
