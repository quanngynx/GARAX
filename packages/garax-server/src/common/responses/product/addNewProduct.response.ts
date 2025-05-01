import {
  AttributeValues,
  Product,
  ProductAttributeValues,
  ProductVariantValues,
  VariantKeys
} from '@/common/interfaces';

export interface AttributeItems extends Pick<ProductAttributeValues, 'value'>, Pick<AttributeValues, 'name'> {}

export interface VariantItems extends Pick<VariantKeys, 'key'> {
  values: string[];
}

export type VariantValueItems = Pick<ProductVariantValues, 'sku' | 'price' | 'oldPrice' | 'stock'>;

export interface AddNewProductResponse extends Product {
  attributes: AttributeItems[];
  variants: VariantItems[];
  variantValues: VariantValueItems[];
}
