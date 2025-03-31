import { Audit, PrimaryKey } from "../bases";
import { PAYMENT_METHOD, PAYMENT_STATUS } from "../constants";

export interface OrderModel extends Audit, PrimaryKey {
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
