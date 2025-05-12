import { BaseResponse } from "@/api/bases/response";
import { ProductModel } from "@/api/models";

export type ProductListSparePartMetadata = ProductModel

export type ProductListSparePartResponse =
BaseResponse<ProductListSparePartMetadata[]>;

