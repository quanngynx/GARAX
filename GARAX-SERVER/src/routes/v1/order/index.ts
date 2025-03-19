import express from 'express'
import { asyncHandler } from '@/middlewares';
import { OrdersController } from '@/controllers';

export const routerOrder = express.Router()
const ordersController = OrdersController.default;
routerOrder.get('/orders', asyncHandler(ordersController.getListOrderByUser))
routerOrder.get('/orders/:id', asyncHandler(ordersController.getInforOrderByUser))

routerOrder.post('/orders', asyncHandler(ordersController.createOrderByUser))
// routerOrder.post('/orders', asyncHandler(ordersController.createOrderByAdminOrStaff))

routerOrder.put('/orders/:id', asyncHandler(ordersController.updateOrderByUser))
// routerOrder.patch('/orders/:id', asyncHandler(ordersController.updateOrderByAdminOrStaff))

routerOrder.delete('/orders/:id', asyncHandler(ordersController.cancelOrderByUser))
// routerOrder.delete('/orders/:id', asyncHandler(ordersController.cancelOrderByAdminOrStaff))

routerOrder.get('/orders/all', asyncHandler(ordersController.getAllOrders))
