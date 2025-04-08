import { getUniqueIdOptions } from './uuid';

interface GenerateSKUProps {
  categoryId: number;
  brandId: number;
  name: string;
  variantValuesId: number[];
}

type CreateVariantCodeInSkuProps = Pick<GenerateSKUProps, 'variantValuesId'>;

const createVariantCodeInSku = ({ variantValuesId }: CreateVariantCodeInSkuProps) => {
  // return variantValuesId ? variantValuesId : 'NV'; // NV = No Variant
  return variantValuesId ? variantValuesId.map((v) => v.toString()).join('-') : 'NV'; // NV = No Variant
};

export const generateSKU = ({ categoryId, brandId, name, variantValuesId }: GenerateSKUProps) => {
  const categoryCode = categoryId ? `C${categoryId}` : 'NC'; // NC = No Category
  const brandCode = brandId ? `B${brandId}` : 'NB'; // NB = No Brand

  const productCode = name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 4); // Limit 5 chars

  const variantCode = createVariantCodeInSku({ variantValuesId });

  const uniqueId = getUniqueIdOptions(6);

  return `${categoryCode}-${brandCode}-${productCode}/${variantCode}/${uniqueId}`;
};

// const result = generateSKU({
//   categoryId: 1,
//   brandId: 2,
//   name: 'abc',
//   variantValuesId: [1, 2, 4]
// });
// console.log(result);
