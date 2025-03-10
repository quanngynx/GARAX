'use strict'

import { AddToCartRequest, CreateUserCartRequest } from "@/common/requests/cart"

import { db } from '../models'

export class CartService {
  static async createUserCart({
    userId
  } : CreateUserCartRequest) {

    return await db.Cart.create({
      userId: userId,
      sessionId: ""
    })
  }

  static async addToCart({
    userId,
    sessionId,
    productItems
  } : AddToCartRequest) {
    const isExistCart = await db.Cart.findOne({
      where: {
        userId: userId,
        // cartState: 'pending'
      }
    })

    if(!isExistCart) return await CartService.createUserCart({ userId })

    console.log("isExistCart::", isExistCart)
    const existingProduct = await db.CartItems.findOne({
      where: { id: isExistCart.id, productVariantId: productItems.idProduct }
    });

    if (existingProduct) {
      existingProduct.qty += existingProduct.qty || 1;
      await existingProduct.save();
    } else {
      // Thêm mới sản phẩm
      await db.Cart.create({
        userId: userId,
        sessionId: sessionId
        // productId: product.productId,
        // quantity: product.quantity || 1
      });
    }

  }

  static async updateCart({}) {

  }

  static async deleteCart({}) {

  }

  static async listToCart({}) {

  }

  static async getNewsById() {

  }

  static async getAllNews() {

  }

  static async updateNewsById() {

  }

  static async updatePartNewsById() {

  }

  static async removeNewsById() {

  }

  static async removeAllNews() {

  }

  static async deleteNewsById() {

  }

  static async deleteAllNews() {

  }

  static async findAllNewsPub() {

  }

  static async findAllNews() {

  }
}
