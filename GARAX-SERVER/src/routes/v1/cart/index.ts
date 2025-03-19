import express from 'express';
import { CartController } from '@/controllers';
import { asyncHandler } from '@/middlewares';

const routerCart = express.Router();
const cartController = CartController.default;

routerCart.post('', asyncHandler(cartController.addToCart))
routerCart.delete('', asyncHandler(cartController.deleteCart))
routerCart.post('/update', asyncHandler(cartController.updateCart))
routerCart.get('', asyncHandler(cartController.listToCart))
