import { Product, ProductVariantValues, VariantKeys, VariantValues } from "@/common/interfaces";

export interface AttributeItems
extends Pick<VariantValues,
| 'value'
>, Pick<VariantKeys,
| 'key'
> {}

export interface VariantItems
extends Pick<VariantKeys,
| 'key'
> {
  values: string[];
}

export interface VariantValueItems
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
| 'createdBy'
| 'updatedBy'
> {
  attributes: AttributeItems[];
  variants: VariantItems[];
  variantValues: VariantValueItems[];
}
