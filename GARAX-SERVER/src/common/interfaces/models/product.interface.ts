import { PRODUCT_STATUS, PRODUCT_TAG } from "@/common/constants";
import { Audit } from '../audit.interface';

export interface Product
extends Audit{
  id: string;
  name: string;
  slug: string;
  desc: JSON;
  views: number;
  tags: PRODUCT_TAG;
  manufacturingDate: BigInt;
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
