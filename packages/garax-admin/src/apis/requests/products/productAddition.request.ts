import { AttributeValues, ProductAttributeValues, ProductModel, ProductVariantValuesModel, VariantKeysModel } from "@/apis/models";

interface AttributeItems 
extends Pick<ProductAttributeValues, 'value'>, Omit<AttributeValues, 'name'> {
    key: string;
}

interface VariantItems 
extends Pick<VariantKeysModel, 'key'> {
    values: string[];
}

interface VariantValueItems 
extends Pick<ProductVariantValuesModel, 
| 'price' 
| 'oldPrice' 
| 'stock'
> {
    variantCombination: string[];
}

export interface ProductAdditionRequest extends Pick<ProductModel, 
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