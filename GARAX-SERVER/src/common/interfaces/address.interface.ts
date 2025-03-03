import { ADDRESS } from "../constants";

export interface Address {
  id: string;
  type: ADDRESS;
  streetRoad: string;
  wardOrCommune: string;
  district: string;
  city: string;
  userId: string;
}
