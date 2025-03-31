import { Audit, PrimaryKey } from "../bases";

export interface OrderDetailsModel extends Audit, PrimaryKey {
  orderId: number;
  productVariantId: number;
  price: number;
  qty: number;
}
