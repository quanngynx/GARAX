import { PAYMENT_METHOD, PAYMENT_STATUS } from "@/common/constants";
import { PrimaryKey } from "../primaryKey.interface";
import { Audit } from "../audit.interface";

export interface Order
extends Audit, PrimaryKey{
  fullname: string;
  phone: string;
  isReceiveAtStore: boolean;
  paymentMethod: PAYMENT_METHOD;
  paymentStatus: PAYMENT_STATUS;
  subTotalFromProd: number;
  shippingFee: number;
  discount: number;
  total: number;
  userId: number;
  addressId: number;
  cartId: number;
}
