import { PrimaryKey } from "../primaryKey.interface";

export interface Payment
extends PrimaryKey {
  amount: number;
  desc: string;
  orderId: number;
  currencyId: number;
  createdAt: Date;
  updatedAt: Date;
}
