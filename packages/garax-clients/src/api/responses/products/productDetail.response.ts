import { BaseResponse } from '../../bases/response/base.response';
import { AttributeValues, ProductAttributeValues, ProductModel, ProductVariantValues } from '../../models';

export type AttributeValuesMetadata = Pick<AttributeValues,
| 'id'
| 'name'
>

export interface ProductAttributeValuesMetadata
extends Pick<ProductAttributeValues,
| 'id'
| 'value'
| 'attributeId'
> {
    attribute_values: AttributeValuesMetadata[];
}

export type ProductVariantValuesMetadata = Pick<ProductVariantValues, 
| 'id'
| 'price'
| 'oldPrice'
| 'stock'
| 'sold'
| 'sku'
| 'manufacturingDate'
| 'productVariantId'
>

export interface ProductDetailMetadata
extends Pick<ProductModel, 
| 'id' 
| 'name'
| 'slug'
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
> {
    product_attribute_values: ProductAttributeValuesMetadata[];
    product_variant_values: ProductVariantValuesMetadata[];
} 

export type ProductDetailResponse =
BaseResponse<ProductDetailMetadata>
