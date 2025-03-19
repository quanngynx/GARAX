import { Audit } from "../audit.interface";

export interface ProductAttributeValues
extends Audit {
  id: string;
  value: string;
  productId: string;
  attributeId: string;
}
