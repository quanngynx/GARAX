import { Product, ProductVariantValues, VariantKeys, VariantValues } from "@/common/interfaces";

interface AttributeItems
extends Pick<VariantValues,
| 'value'
>, Pick<VariantKeys,
| 'key'
> {}

interface VariantItems
extends Pick<VariantKeys,
| 'key'
> {
  values: string[];
}

interface VariantValueItems
extends Pick<ProductVariantValues,
| 'price'
| 'oldPrice'
| 'stock'
> {
  variantCombination: string[];
}

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
> {
  attributes: AttributeItems[];
  variants: VariantItems[];
  variantValues: VariantValueItems[];
}
