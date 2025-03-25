import { VariantItems } from '../requests/product';
import { getUniqueIdOptions } from './uuid';

interface GenerateSKUProps {
  categoryId: number;
  brandId: number;
  name: string;
  variants: VariantItems[];
}

export const generateSKU = ({ categoryId, brandId, name, variants }: GenerateSKUProps) => {
  const categoryCode = categoryId ? `C${categoryId}` : 'NC'; // NC = No Category
  const brandCode = brandId ? `B${brandId}` : 'NB'; // NB = No Brand

  const productCode = name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 4); // Limit 5 chars

  // const variantCode = variants
  //   ? variants
  //   .map((v: VariantItems) =>
  //     v.values.substring(0, 2).toUpperCase()).join("")
  //   : "NV"; // NV = No Variant

  const variantCode =
    variants.length > 0
      ? variants
          .map(
            (v: VariantItems) =>
              Array.isArray(v.values) ? v.values.map((value) => value.substring(0, 2).toUpperCase()).join('') : 'UK' // UK = Unknow
          )
          .join('-')
      : 'NV'; // NV = No Variant

  const uniqueId = getUniqueIdOptions(6);

  return `${categoryCode}-${brandCode}-${productCode}-${variantCode}-${uniqueId}`;
};
