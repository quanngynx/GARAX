import { PAYMENT_METHOD, PAYMENT_STATUS } from "@/common/constants";

export interface Order {
  id: string;
  fullname: string;
  phone: string;
  isReceiveAtStore: boolean;
  paymentMethod: PAYMENT_METHOD;
  paymentStatus: PAYMENT_STATUS;
  subTotalFromProd: number;
  shippingFee: number;
  discount: number;
  total: number;
  userId: string;
  addressId: string;
  cartId: string;
  createBy: string;
  updateBy: string;
  createdAt: Date;
  updatedAt: Date;
}
