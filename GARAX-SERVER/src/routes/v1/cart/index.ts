import express from 'express';
import { CartController } from '@/controllers';
import { asyncHandler } from '@/middlewares';

export const routerCart = express.Router();
const cartController = CartController.default;

// routerCart.post('/cart', asyncHandler(cartController.createUserCart));
routerCart.post('/cart', asyncHandler(cartController.addToCart));
routerCart.post('/cart/checkout', asyncHandler(cartController.checkoutCart));
routerCart.delete('/cart', asyncHandler(cartController.deleteCart));
routerCart.put('/cart', asyncHandler(cartController.updateCart));
routerCart.get('/cart/:id', asyncHandler(cartController.getCartById));
routerCart.get('/cart', asyncHandler(cartController.listToCart));
