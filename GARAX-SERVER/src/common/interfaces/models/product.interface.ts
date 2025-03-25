import { PRODUCT_STATUS, PRODUCT_TAG } from '@/common/constants';
import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface Product extends Audit, PrimaryKey {
  name: string;
  slug: string;
  desc: JSON;
  views: number;
  tags: PRODUCT_TAG;
  manufacturingDate: bigint;
  minPrice: number;
  maxPrice: number;
  rate: number;
  totalRate: number;
  totalSold: number;
  categoryId: number;
  subCategoryId: number;
  sub2CategoryId: number;
  sub3CategoryId: number;
  videoId: number;
  brandId: number;
  status: PRODUCT_STATUS;
}
