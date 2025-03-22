'use strict'

import {
  AddToCartRequest,
  CreateUserCartRequest
} from "@/common/requests/cart";

import { db } from '../models';
import { NotFoundError } from "@/middlewares";
import { createCart } from "@/common/repositories";

export class CartService {
  static async createUserCart({
    userId,
  } : CreateUserCartRequest) {
    const findCartExistByUser = await db.Cart.findAll({
      where: {
        userId: userId
      }
    });

    if(!findCartExistByUser) {
      createCart(userId)
    };
    return;
  }

  // static async createUserCart({
  //   userId,
  // } : CreateUserCartRequest) {
  //   const findCartExistByUser = await db.Cart.findAll({
  //     where: {
  //       userId: userId
  //     }
  //   });

  //   if(findCartExistByUser) throw new BadRequestError(`Tồn tại giỏ hàng của người dùng ${userId}`);

  //   return await db.Cart.create({
  //     userId: userId,
  //     sessionId: ''
  //   })
  // }

  static async addToCart({
    userId,
    productVariantItems
  } : AddToCartRequest) {
    const isExistCart = await db.Cart.findOne({
      where: {
        userId: userId,
      }
    });

    // console.log('isExistCart::', isExistCart?.dataValues.id);

    // if (!isExistCart || !isExistCart.id) {
    //   throw new BadRequestError("Giỏ hàng không tồn tại hoặc không có ID hợp lệ.");
    // }

    if(!isExistCart) {
      const createNewCart = await createCart(userId);
      const isExistProductVariant = await db.CartItems.findOne({
        where: {
          cartId: createNewCart.newCart.dataValues.id,
          productVariantId: productVariantItems.productVariantId
        }
      });

      console.log('createNewCart id::', createNewCart.newCart.id);

      await db.CartItems.upsert({
        cartId: createNewCart.newCart.id || 0,
        productVariantId: productVariantItems.productVariantId,
        qty: (isExistProductVariant?.dataValues.qty || 0) + (productVariantItems.qty || 1),
      });

      return {
        newCart: createNewCart.newCart,
        newItemsCart: db.CartItems.findAll({
          where: { cartId: createNewCart.newCart.id }
        })
      };
    };

    // console.log("isExistCart::", isExistCart)
    const isExistProductVariant = await db.CartItems.findOne({
      where: {
        cartId: isExistCart.dataValues.id,
        productVariantId: productVariantItems.productVariantId
      }
    });

    if (isExistProductVariant) {
      await db.CartItems.update({
        qty: isExistProductVariant.dataValues.qty + (productVariantItems.qty || 1)
      }, {
          where: {
            cartId: isExistCart.dataValues.id,
            productVariantId: productVariantItems.productVariantId
          }
        }
      );
    } else {
      await db.CartItems.create({
        cartId: isExistCart.id || 0,
        productVariantId: productVariantItems.productVariantId,
        qty: productVariantItems.qty || 1
      });
    }

    const getAllCartItems = await db.CartItems.findAll({
      where: {
        cartId: isExistCart.dataValues.id
      }
    });

    if(!getAllCartItems) {
      throw new NotFoundError(`Không thể lấy sản phẩm trong giỏ hàng :${isExistCart.dataValues.id}:`);
    }

    return {
      isExistCart,
      cartItems: getAllCartItems
    }
  }

  static async updateCart({}) {

  }

  static async deleteCart({}) {

  }

  static async getCartById(id: string) {
    const findCartById = await db.Cart.findByPk(id);
    if(!findCartById) {
      throw new NotFoundError(`'Không tìm thấy cart :${id}:'`);
    }

    const findAllItemsCart = await db.CartItems.findAll({
      where: {
        cartId: id
      }
    });

    if(!findAllItemsCart) { return findCartById; }

    return {
      findCartById,
      cartItems: findAllItemsCart
    };
  }

  static async listToCart({}) {

  }

  static async findAllNews() {

  }
}
