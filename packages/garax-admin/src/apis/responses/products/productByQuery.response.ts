import { BaseResponse } from "@/apis/bases/response";
import { ProductModel } from "@/apis/models";

interface ProductListMetadata {
    count: number;
    rows: ProductModel[];
}

export type FindAllProductByQueryResponse = BaseResponse<ProductListMetadata>;

