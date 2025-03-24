import { Audit } from "../audit.interface";
import { PrimaryKey } from "../primaryKey.interface";

export interface VariantKeys
extends Audit, PrimaryKey {
  key: string;
}
