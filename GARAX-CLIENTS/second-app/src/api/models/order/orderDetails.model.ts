import { Audit, PrimaryKey } from "@/api/bases";

export interface OrderDetails extends Audit, PrimaryKey {
  orderId: number;
  productVariantId: number;
  price: number;
  qty: number;
}
