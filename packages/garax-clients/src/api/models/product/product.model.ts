import { Audit, PrimaryKey } from '../../bases';
import { PRODUCT_STATUS, PRODUCT_TAG } from '../../constants';

export interface ProductModel extends Audit, PrimaryKey {
  name: string;
  slug: string;
  // desc: JSON;
  desc: string;
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