import { ADDRESS } from "../../constants";
import { PrimaryKey } from "../primaryKey.interface";

export interface Address
extends PrimaryKey {
  type: ADDRESS;
  streetRoad: string;
  wardOrCommune: string;
  district: string;
  city: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
