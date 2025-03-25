import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface VariantValues extends Audit, PrimaryKey {
  value: string;
  variantKeyId: number;
}
