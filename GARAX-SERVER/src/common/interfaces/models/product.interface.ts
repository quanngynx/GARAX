import { PRODUCT_STATUS, PRODUCT_TAG } from "@/common/constants";

export interface Product {
  id: string;
  name: string;
  slug: string;
  desc: JSON;
  views: number;
  tags: PRODUCT_TAG;
  manufacturingDate: BigInt;
  minPrice: number;
  maxPrice: number;
  categoryId: string;
  subCategoryId: string;
  sub2CategoryId: string;
  sub3CategoryId: string;
  videoId: string;
  brandId: string;
  status: PRODUCT_STATUS;
  createBy: string;
  updateBy: string;
  created_at: Date;
  updated_at: Date;
}
