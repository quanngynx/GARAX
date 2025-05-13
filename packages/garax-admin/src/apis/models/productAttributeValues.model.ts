import { Audit, PrimaryKey } from "../bases";

export interface ProductAttributeValues extends Audit, PrimaryKey {
  value: string;
  productId: number;
  attributeId: number;
}
