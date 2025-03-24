import { Audit } from "../audit.interface";
import { PrimaryKey } from "../primaryKey.interface";

export interface ProductAttributeValues
extends Audit, PrimaryKey {
  value: string;
  productId: number;
  attributeId: number;
}
