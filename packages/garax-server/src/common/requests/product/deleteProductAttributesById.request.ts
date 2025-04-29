import { ProductVariantValues } from '@/common/interfaces';

export interface DeleteProductAttributesByIdRequest extends Pick<ProductVariantValues, 'id'> {
  attributeValuesIds: number | number[];
}
