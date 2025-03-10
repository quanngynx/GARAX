'use strict'
import { NextFunction, Request, Response } from 'express';
import { CartService } from "../services/cart.service";
import { SuccessResponse } from '../middlewares/success.response';

class CartController {

  addToCart = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Add new cart success!',
      metadata: await CartService.addToCart(req.body)
    }).send(res)
  }

  updateCart = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Update cart success!',
      metadata: await CartService.updateCart(req.body)
    }).send(res)
  }

  deleteCart = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Delete cart success!',
      metadata: await CartService.deleteCart(req.body)
    }).send(res)
  }

  listToCart = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get list cart success!',
      metadata: await CartService.listToCart(req.query)
    }).send(res)
  }
}

export default new CartController()
