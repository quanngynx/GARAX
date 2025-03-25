import { NotFoundError } from '@/middlewares';
import { db } from '@/models';

export const getProductById = async (id: number) => {
  const proId = await db.Product.findByPk(id);

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
