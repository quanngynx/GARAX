import { NextFunction, Request, Response } from 'express';
import { db } from '@/models';

export default {
  // Lấy danh sách tất cả sản phẩm
  async getAllProducts(_req: Request, res: Response, _next: NextFunction) {
    try {
      const products = await db.Product.findAll({
        where: {
          status: 'publish',  // Chỉ lấy sản phẩm đã được xuất bản
          // isActive: true      // Chỉ lấy sản phẩm đang hoạt động
        },
        include: ['productCategory', 'productDetail', 'productMedia', 'productFeedback', 'brand'],  // Bao gồm các liên kết nếu cần
      });

      if (!products) {
        return res.status(404).json({ message: 'Không có sản phẩm nào.' });
      }

      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại.' });
    }
  },
};
