import { Audit, PrimaryKey } from "@/api/bases";

export interface ProductAttributeValues extends Audit, PrimaryKey {
  value: string;
  productId: number;
  attributeId: number;
}
