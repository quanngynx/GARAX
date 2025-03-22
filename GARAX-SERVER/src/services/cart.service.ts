'use strict'

import {
  AddToCartRequest,
  CreateUserCartRequest
} from "@/common/requests/cart";

import { db } from '../models';
import { NotFoundError } from "@/middlewares";
import { createCart, getAllCartItemsByIdCart } from "@/common/repositories";

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
    let isExistCart;

    isExistCart = await db.Cart.findOne({
      where: {
        userId: userId,
      }
    })

    if(!isExistCart) {
      isExistCart = await createCart(userId)
    };

    // console.log("isExistCart::", isExistCart)
    if(isExistCart) {
      const isExistProductVariant = await db.CartItems.findOne({
        where: {
          id: isExistCart.id,
          productVariantId: productVariantItems.productVariantId
        }
      });

      if (isExistProductVariant) {
        isExistProductVariant.qty += productVariantItems.qty || 1;
        await isExistProductVariant.save();
      } else {
        await db.CartItems.create({
          id: isExistCart.id,
          productVariantId: productVariantItems.productVariantId,
          cartId: isExistCart.id,
          qty: productVariantItems.qty || 1,
        });
      }
    }

    const getAllCartItems = getAllCartItemsByIdCart(isExistCart.id);
    if(!getAllCartItems) {
      throw new NotFoundError(`Không thể lấy sản phẩm trong giỏ hàng :${isExistCart.id}:`);
    }

    return {
      isExistCart,
      getAllCartItems
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
