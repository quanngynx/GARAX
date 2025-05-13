import { BaseResponse } from "@/apis/bases/response";
import { AttributeValues, ProductAttributeValues, ProductModel, ProductVariantValuesModel, VariantKeysModel } from "@/apis/models";

interface AttributeItems 
extends Pick<ProductAttributeValues, 'value'>, Pick<AttributeValues, 'name'> {}

interface VariantItems 
extends Pick<VariantKeysModel, 'key'> {
    values: string[];
}

interface VariantValueItems 
extends Pick<ProductVariantValuesModel, 
| 'price' 
| 'oldPrice' 
| 'stock'
| 'sku'
> {}

interface ProductAdditionMetadata extends Pick<ProductModel, 
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

export type ProductAdditionResponse = BaseResponse<ProductAdditionMetadata>;