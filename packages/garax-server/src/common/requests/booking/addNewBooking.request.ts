import { Booking } from '@/common/interfaces';

export type AddNewBookingRequest = 
  Pick<Booking, 'title' | 'allDay' | 'start' | 'end' | 'desc'>;
