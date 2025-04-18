/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { OrdersService } from '../services/order.service';

import { SuccessResponse } from '../middlewares/success.response';
import { RequestBody, RequestParams, ResponseBody } from '@/common/interfaces';
import { GetAllProductsByQueryOptionsQuery } from './product.controller';

class OrdersController {
  /**
   * @LOQ-burh
   * @desc Order management by user
   */
  // getInforOrderByUser = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Get infor successfully',
  //     metadata: await OrdersService.getInforOrderByUser(req.body)
  //   }).send(res);
  // };
  // getListOrderByUser = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Create payment link successfully',
  //     metadata: await OrdersService.getListOrderByUser(req.body)
  //   }).send(res);
  // };
  // updateOrderByUser = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Create payment link successfully',
  //     metadata: await OrdersService.updateOrderByUser(req.body)
  //   }).send(res);
  // };
  // createOrderByUser = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Create payment link successfully',
  //     metadata: await OrdersService.createOrderByUser(req.body)
  //   }).send(res);
  // };
  // cancelOrderByUser = async (req: Request, res: Response, _next: NextFunction) => {
  //   new SuccessResponse({
  //     message: 'Create payment link successfully',
  //     metadata: await OrdersService.cancelOrderByUser(req.body)
  //   }).send(res);
  // };

  /**
   * @LOQ-burh
   * @desc Order management by admin/staff
   */
  getAllOrders = async (_req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all order successfully',
      metadata: await OrdersService.getAllOrders()
    }).send(res);
  };
  getAllOrdersByQueryOptions = async (
    req: Request<RequestParams, ResponseBody, RequestBody, GetAllProductsByQueryOptionsQuery>,
    res: Response,
    _next: NextFunction
  ) => {
    // const { filters, search, sort, pagination } = req.query;
    // console.log('filters::', filters);
    // console.log('search::', search);
    // console.log('sort::', sort);
    // console.log('pagination::', pagination);
    new SuccessResponse({
      message: 'Lấy tất cả hàng hóa thành công!',
      metadata: await OrdersService.getAllOrdersByQueryOptions(req.query)
    }).send(res);
  };
  createOrderByAdminOrStaff = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Create payment link successfully',
      metadata: await OrdersService.createOrderByAdminOrStaff(req.body)
    }).send(res);
  };
  updateOrderByAdminOrStaff = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Create payment link successfully',
      metadata: await OrdersService.updateOrderByAdminOrStaff(req.body)
    }).send(res);
  };
  cancelOrderByAdminOrStaff = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Create payment link successfully',
      metadata: await OrdersService.cancelOrderByAdminOrStaff(req.body)
    }).send(res);
  };
  getAllTransactions = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all order successfully',
      metadata: await OrdersService.getAllTransactions(req.params)
    }).send(res);
  };
}
export default new OrdersController();

// module.exports = {
//   // Lấy giỏ hàng của người dùng
//   async getCart(req, res) {
//     try {
//       const userId = req.user.id; // Giả sử bạn đã có xác thực người dùng (req.user)

//       const order = await Order.findOne({
//         where: {
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         },
//         include: [
//           {
//             model: OrderProduct,
//             as: 'orderProducts',
//             include: [
//               {
//                 model: Product,
//                 as: 'product'
//               }
//             ]
//           }
//         ]
//       });

//       if (!order) {
//         return res.status(404).json({ message: 'Giỏ hàng không tìm thấy.' });
//       }

//       return res.status(200).json(order);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
//     }
//   },

//   // Thêm sản phẩm vào giỏ hàng
//   async addToCart(req, res) {
//     try {
//       const { productId, quantity } = req.body;
//       const userId = req.user.id; // Giả sử bạn đã có xác thực người dùng (req.user)

//       // Kiểm tra xem sản phẩm có tồn tại không
//       const product = await Product.findByPk(productId);
//       if (!product) {
//         return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
//       }

//       // Tìm đơn hàng hiện tại của người dùng (trạng thái "pending")
//       let order = await Order.findOne({
//         where: {
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         }
//       });

//       if (!order) {
//         // Nếu không có đơn hàng "pending", tạo mới
//         order = await Order.create({
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         });
//       }

//       // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
//       let orderProduct = await OrderProduct.findOne({
//         where: {
//           idOrder: order.idOrder,
//           idProduct: productId
//         }
//       });

//       if (orderProduct) {
//         // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
//         orderProduct.quantity += quantity;
//         await orderProduct.save();
//       } else {
//         // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
//         await OrderProduct.create({
//           idOrder: order.idOrder,
//           idProduct: productId,
//           quantity,
//           subTotal: product.originalPrice * quantity, // Tính tổng phụ
//           total: product.originalPrice * quantity, // Tính tổng giá trị
//         });
//       }

//       return res.status(201).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng.' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
//     }
//   },

//   // Cập nhật số lượng sản phẩm trong giỏ hàng
//   async updateCart(req, res) {
//     try {
//       const { productId, quantity } = req.body;
//       const userId = req.user.id; // Giả sử bạn đã có xác thực người dùng (req.user)

//       // Tìm đơn hàng của người dùng
//       const order = await Order.findOne({
//         where: {
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         }
//       });

//       if (!order) {
//         return res.status(404).json({ message: 'Giỏ hàng không tìm thấy.' });
//       }

//       // Tìm sản phẩm trong giỏ hàng
//       const orderProduct = await OrderProduct.findOne({
//         where: {
//           idOrder: order.idOrder,
//           idProduct: productId
//         }
//       });

//       if (!orderProduct) {
//         return res.status(404).json({ message: 'Sản phẩm không có trong giỏ hàng.' });
//       }

//       // Cập nhật số lượng sản phẩm
//       orderProduct.quantity = quantity;
//       orderProduct.subTotal = orderProduct.product.originalPrice * quantity;
//       orderProduct.total = orderProduct.subTotal + orderProduct.shippingFee;

//       await orderProduct.save();

//       return res.status(200).json({ message: 'Cập nhật giỏ hàng thành công.' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
//     }
//   },

//   // Xóa sản phẩm khỏi giỏ hàng
//   async removeFromCart(req, res) {
//     try {
//       const { productId } = req.params;
//       const userId = req.user.id; // Giả sử bạn đã có xác thực người dùng (req.user)

//       // Tìm đơn hàng của người dùng
//       const order = await Order.findOne({
//         where: {
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         }
//       });

//       if (!order) {
//         return res.status(404).json({ message: 'Giỏ hàng không tìm thấy.' });
//       }

//       // Tìm sản phẩm trong giỏ hàng
//       const orderProduct = await OrderProduct.findOne({
//         where: {
//           idOrder: order.idOrder,
//           idProduct: productId
//         }
//       });

//       if (!orderProduct) {
//         return res.status(404).json({ message: 'Sản phẩm không có trong giỏ hàng.' });
//       }

//       // Xóa sản phẩm khỏi giỏ hàng
//       await orderProduct.destroy();

//       return res.status(200).json({ message: 'Sản phẩm đã được xóa khỏi giỏ hàng.' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
//     }
//   },

//   // Thanh toán giỏ hàng
//   async checkout(req, res) {
//     try {
//       const userId = req.user.id; // Giả sử bạn đã có xác thực người dùng (req.user)

//       // Tìm đơn hàng của người dùng
//       const order = await Order.findOne({
//         where: {
//           idAcc: userId,
//           status: 'pending',
//           isActive: true
//         }
//       });

//       if (!order) {
//         return res.status(404).json({ message: 'Giỏ hàng không tìm thấy.' });
//       }

//       // Cập nhật trạng thái đơn hàng và thanh toán
//       order.status = 'paid';
//       await order.save();

//       return res.status(200).json({ message: 'Thanh toán thành công!' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
//     }
//   }
// };
