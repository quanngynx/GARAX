import { CategoryProduct } from '@/common/interfaces';

export type AddNewCategoryRequest = Pick<
  CategoryProduct,
  'name' | 'desc' | 'isParentCategory' | 'isActive' | 'imageId' | 'parentId'
>;
