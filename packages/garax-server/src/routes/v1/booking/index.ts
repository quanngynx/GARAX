import express from 'express';
import { asyncHandler } from '@/middlewares';
import { BookingController } from '@/controllers';

export const routerBooking = express.Router();

const bookingController = BookingController.default;
// routerBooking.get('/Bookings/all', asyncHandler(BookingController.getAllBooking));
// routerBooking.get('/products/:id', asyncHandler(BookingController.getProductById));
routerBooking.post('/bookings', asyncHandler(bookingController.addNewBooking));
