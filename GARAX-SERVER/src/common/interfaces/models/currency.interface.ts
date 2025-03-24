import { PrimaryKey } from "../primaryKey.interface";

export interface Currency
extends PrimaryKey {
  currency: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
