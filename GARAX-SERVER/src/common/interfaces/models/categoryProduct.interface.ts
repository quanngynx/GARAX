import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface CategoryProduct extends Audit, PrimaryKey {
  name: string;
  slug: string;
  desc: string;
  countProduct: number;
  isParentCategory: boolean;
  isActive: boolean;
  imageId: number;
  parentId: number;
  categoryId: number;
}
