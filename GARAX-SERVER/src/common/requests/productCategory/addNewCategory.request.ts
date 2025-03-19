import { CategoryProduct } from "@/common/interfaces";

export interface AddNewCategoryRequest
extends Pick<CategoryProduct,
| 'name'
| 'desc'
| 'isParentCategory'
| 'isActive'
| 'imageId'
| 'parentId'
> {}
