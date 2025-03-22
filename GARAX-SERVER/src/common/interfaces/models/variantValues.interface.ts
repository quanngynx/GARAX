import { Audit } from "../audit.interface";

export interface VariantValues
extends Audit {
  id: string;
  value: string;
  variantKeyId: number;
}
