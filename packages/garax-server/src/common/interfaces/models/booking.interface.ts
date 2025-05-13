import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface Booking extends Audit, PrimaryKey {
  title: string;
  allDay: boolean;
  start: string;
  end: string;
  desc: JSON;
}
