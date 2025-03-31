import { BaseResponse } from "@/apis/bases/response";
import { BrandModel } from "@/apis/models";

export type BrandListMetadata = BrandModel

export type BrandListResponse =
BaseResponse<BrandListMetadata[]>;

