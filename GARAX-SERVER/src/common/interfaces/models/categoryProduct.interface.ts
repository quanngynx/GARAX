import { Audit } from "../audit.interface";

export interface CategoryProduct
extends Audit {
  id: string;
  name: string;
  slug: string;
  desc: string;
  countProduct: number;
  isParentCategory: boolean;
  isActive: boolean;
  imageId: string;
  parentId: string;
}
