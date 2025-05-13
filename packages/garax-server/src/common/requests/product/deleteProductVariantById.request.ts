import { ProductVariantValues } from '@/common/interfaces';

export interface DeleteProductVariantByIdRequest extends Pick<ProductVariantValues, 'id'> {
  variantValuesIds: number | number[];
}
