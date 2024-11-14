'use strict'

const { Cart } = require('../models')
const { CartItemsProduct } = require('../models')

class NewsService {
  static async createUserCart({ userId, product }) {
    const query = { idUser: userId, cartState: 'pending' }
    return await Cart.create( query )
  }

  static async addToCart({ idUser }, { }) {
    const isExistCart = await Cart.findOne({ where: { idUser: idUser } })

    if(!isExistCart) return await Cart.createUserCart({ userId, product })

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

module.exports = NewsService
