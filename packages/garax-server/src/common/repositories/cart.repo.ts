import { db } from '@/models';

export const createCart = async (userId: number) => {
  const createCart = await db.Cart.create({
    userId: userId,
    sessionId: ''
    // productId: product.productId,
    // quantity: product.quantity || 1
  });

  // const createCartItems = await db.CartItems.create({
  //   cartId: createCart.dataValues.id || 0,
  //   qty: 0,
  //   productVariantId: 0
  // });
  return {
    newCart: createCart
    // newCartItems: createCartItems
  };
};
