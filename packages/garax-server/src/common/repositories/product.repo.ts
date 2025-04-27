import { NotFoundError } from '@/middlewares';
import { db } from '@/models';
import { getVariantValuesIdFromSKU } from '../utils';

export const getManyVariantValues = async (variantValues: number[] | number) => {
  return await db.VariantValues.findAll({
    where: {
      id: variantValues
    },
    attributes: ['id', 'value', 'variantKeyId'],
    include: [
      {
        model: db.VariantKeys,
        as: 'variant_key',
        attributes: ['id', 'key']
      }
    ]
  });
};

export const getProductById = async (id: number) => {
  const proId = await db.Product.findByPk(id, {
    include: [
      {
        model: db.ProductAttributeValues,
        as: 'product_attribute_values',
        attributes: ['id', 'value', 'attributeId'],
        include: [
          {
            model: db.AttributeValues,
            as: 'attribute_values',
            attributes: ['id', 'name']
          }
        ]
      },
      {
        model: db.ProductVariantValues,
        as: 'product_variant_values',
        attributes: ['id', 'price', 'oldPrice', 'stock', 'sold', 'sku', 'manufacturingDate', 'productVariantId']
      }
    ],
    nest: true
  });

  if (!proId || !proId.dataValues.product_variant_values) throw new NotFoundError('error::get Product by _id');

  const mixVariantValues = await Promise.all(
    proId.dataValues.product_variant_values.map(async (variant) => {
      const variantValues = getVariantValuesIdFromSKU(variant.sku) ?? [];
      const getVariantValues = await getManyVariantValues(variantValues);
      // console.log(getVariantValues);
      return {
        ...variant.dataValues,
        variant_values: getVariantValues
      };
    })
  );
  // console.log(mixVariantValues);
  // console.log(proId instanceof db.Product);
  return {
    ...proId.dataValues,
    product_variant_values: mixVariantValues
  };
};

export const getProductVariantValueByIdProduct = async ({ productId }: { productId: string }) => {
  const proId = await db.ProductVariantValues.findOne({
    where: {
      productId: productId
    }
  });

  if (!proId) throw new NotFoundError('error::get Product by productId');

  // console.log("_id pro::", proId)
  // console.log(proId instanceof db.Product);
  return proId;
};
