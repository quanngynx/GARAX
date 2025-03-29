import { PrimaryKey, Audit } from "../bases";

export interface CategoryProduct
extends Audit, PrimaryKey {
  name: string;
  slug: string;
  desc: string;
  countProduct: number;
  isParentCategory: boolean;
  isActive: boolean;
  imageId: string;
  parentId: string;
}
