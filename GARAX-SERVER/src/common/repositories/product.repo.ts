import { NotFoundError } from '@/middlewares';
import { db } from '@/models';

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

  console.log('proId::', proId?.dataValues.product_attribute_values?.attribute_values);

  if (!proId) throw new NotFoundError('error::get Product by _id');

  // console.log("_id pro::", proId)
  // console.log(proId instanceof db.Product);
  return proId;
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
