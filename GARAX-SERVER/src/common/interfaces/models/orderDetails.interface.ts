import { PrimaryKey } from "../primaryKey.interface";
import { Audit } from "../audit.interface";

export interface OrderDetails
extends Audit, PrimaryKey{
  orderId: number;
  productVariantId: number;
  price: number;
  qty: number;
}
