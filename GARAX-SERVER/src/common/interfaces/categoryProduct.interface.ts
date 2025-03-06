export interface CategoryProduct {
  id: string;
  name: string;
  slug: string;
  desc: string;
  countProduct: number;
  isParentCategory: boolean;
  isActive: boolean;
  imageId: string;
  parentId: string;
  created_at: Date;
  updated_at: Date;
}
