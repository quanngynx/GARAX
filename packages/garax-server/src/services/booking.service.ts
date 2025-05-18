import { AddNewBookingRequest } from '@/common/requests/booking';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { db } from '../models';

export class BookingService {
  static async addNewBooking({ title, allDay, start, end, desc }: AddNewBookingRequest) {
    try {
      const newBooking = await db.Booking.create({
        title,
        allDay,
        start,
        end,
        desc
      });

      if (!newBooking) throw new BadRequestError('error::create new Booking');

      return newBooking;
    } catch (error) {
      console.error('Error in addNewCategory:', error);
      throw new InternalServerError(`${error}`);
    }
  }

  static async getAllBooking() {
    const allBooking = await db.Booking.findAll({});

    if (!allBooking) throw new NotFoundError('error::find all Booking!');

    return allBooking;
  }

  //   static async deleteBooking(id: number) {
  //   }
}
