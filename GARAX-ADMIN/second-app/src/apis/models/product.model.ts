import { PRODUCT_STATUS, PRODUCT_TAG } from "../constants";
import { Audit } from "../interfaces";

export interface ProductModel
extends Audit {
    id: string;
    name: string;
    slug: string;
    totalStock: number;
    desc: JSON;
    views: number;
    tags: PRODUCT_TAG;
    manufacturingDate: bigint;
    minPrice: number;
    maxPrice: number;
    rate: number;
    totalRate: number;
    totalSold: number;
    categoryId: string;
    subCategoryId: string;
    sub2CategoryId: string;
    sub3CategoryId: string;
    videoId: string;
    brandId: string;
    status: PRODUCT_STATUS;
}