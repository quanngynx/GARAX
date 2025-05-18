import { NextFunction, Request, Response } from 'express';
import { SuccessResponse } from '../middlewares/success.response';
import { BookingService } from '@/services/booking.service';

class BookingController {
  addNewBooking = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Add new booking success!',
      metadata: await BookingService.addNewBooking(req.body)
    }).send(res);
  };

  getAllBooking = async (req: Request, res: Response, _next: NextFunction) => {
    new SuccessResponse({
      message: 'Get all booking success!',
      metadata: await BookingService.getAllBooking()
    }).send(res);
  };
}

export default new BookingController();
