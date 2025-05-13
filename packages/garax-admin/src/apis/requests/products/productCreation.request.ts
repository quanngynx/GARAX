import { ProductModel, ProductVariantValuesModel, VariantKeysModel, VariantValuesModel } from "@/apis/models";

export interface AttributeItems extends Pick<VariantValuesModel, 'value'>, Pick<VariantKeysModel, 'key'> { }

export interface VariantItems extends Pick<VariantKeysModel, 'key'> {
    values: string[];
}

export interface VariantValueItems extends Pick<ProductVariantValuesModel, 'price' | 'oldPrice' | 'stock'> {
    variantCombination: string[];
}

export interface ProductCreationRequest
    extends Pick<ProductModel,
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