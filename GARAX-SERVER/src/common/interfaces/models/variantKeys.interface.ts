import { Audit } from "../audit.interface";

export interface VariantKeys
extends Audit {
  id: string;
  key: string;
}
