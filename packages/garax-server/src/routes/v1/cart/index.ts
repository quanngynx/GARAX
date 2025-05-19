import express from 'express';
import { CartController } from '@/controllers';
import { asyncHandler } from '@/middlewares';

export const routerCart = express.Router();
const cartController = CartController.default;

// routerCart.post('/cart', asyncHandler(cartController.createUserCart));
routerCart.get('/cart', asyncHandler(cartController.listToCart));
routerCart.get('/cart/:id', asyncHandler(cartController.getCartById));
routerCart.post('/cart', asyncHandler(cartController.addToCart));
routerCart.post('/cart/checkout', asyncHandler(cartController.checkoutCart));
routerCart.put('/cart', asyncHandler(cartController.updateCart));
// routerCart.delete('/cart', asyncHandler(cartController.deleteCart));
routerCart.delete('/cart/:id', asyncHandler(cartController.deleteCartById));
