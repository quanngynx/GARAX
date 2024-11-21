'use strict'

const CartService = require("../services/cart.service")
const { SuccessResponse } = require('../middlewares/success.response');
const { BadRequestError } = require("../middlewares/error.response");

class CartController {

  addToCart = async ( req, res, next ) => {
    new SuccessResponse({
      message: 'Add new cart success!',
      metadata: await CartService.addToCart(req.body)
    }).send(res)
  }

  updateCart = async ( req, res, next ) => {
    new SuccessResponse({
      message: 'Update cart success!',
      metadata: await CartService.addToCartV2(req.body)
    }).send(res)
  }

  deleteOnCart = async ( req, res, next ) => {
    new SuccessResponse({
      message: 'Delete cart success!',
      metadata: await CartService.deleteUserCart(req.body)
    }).send(res)
  }

  listToCart = async ( req, res, next ) => {
    new SuccessResponse({
      message: 'Get list cart success!',
      metadata: await CartService.getListUserCart(req.query)
    }).send(res)
  }
}

module.exports = new CartController()
