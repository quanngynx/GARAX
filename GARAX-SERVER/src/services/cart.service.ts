'use strict'

import { AddToCartRequest, CreateUserCartRequest } from "@/common/requests/cart"

import { db } from '../models'

class CartService {
  static async createUserCart({
    userId
  } : CreateUserCartRequest) {
    const cart = { idUser: userId, cartState: 'pending' }

    return await db.Cart.create( cart )
  }

  static async addToCart({
    userId,
    productItems
  } : AddToCartRequest) {
    const isExistCart = await db.Cart.findOne({
      where: {
        idUser: userId,
        cartState: 'pending'
      }
    })

    if(!isExistCart) return await CartService.createUserCart({ userId })

    console.log("isExistCart::", isExistCart)
    const existingProduct = await db.CartItemsProduct.findOne({
      where: { idCartProduct: isExistCart.idCartProduct, productId: productItems.idProduct }
    });

    if (existingProduct) {
      existingProduct.quantity += product.quantity || 1;
      await existingProduct.save();
    } else {
      // Thêm mới sản phẩm
      await db.CartProduct.create({
        cartId: cart.id,
        productId: product.productId,
        quantity: product.quantity || 1
      });
    }

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

module.exports = CartService
