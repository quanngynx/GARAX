import { db } from "@/models";

export const createCart = async (userId: string) => {
  const createCart = await db.Cart.create({
    userId: userId,
    sessionId: '',
    // productId: product.productId,
    // quantity: product.quantity || 1
  });

  const createCartItems = await db.CartItems.create({
    cartId: createCart.id,
    qty: 0,
    productVariantId: ""
  });
  return {
    newCart: createCart,
    newCartItems: createCartItems
  }
}

export const getAllCartItemsByIdCart = async (id: string) => {
  return await db.CartItems.findAll({
    where: {
      cartId: id
    }
  })
}
