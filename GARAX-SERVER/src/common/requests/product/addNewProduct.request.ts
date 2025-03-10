import { Product } from "@/common/interfaces";

export interface AddNewProductRequest
extends Pick<Product,
| 'name'
| 'totalStock'
| 'desc'
| 'views'
| 'tags'
| 'manufacturingDate'
| 'minPrice'
| 'maxPrice'
| 'rate'
| 'totalRate'
| 'totalSold'
| 'categoryId'
| 'subCategoryId'
| 'sub2CategoryId'
| 'sub3CategoryId'
| 'videoId'
| 'brandId'
| 'status'
| 'createBy'
| 'updateBy'
> {}
