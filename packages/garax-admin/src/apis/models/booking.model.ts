import { PrimaryKey } from "../bases";

export interface BookingModel extends PrimaryKey {
  title: string;
  allDay: boolean;
  start: string
  end: string;
  desc: string;
}
