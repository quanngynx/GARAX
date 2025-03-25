import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface AttributeValues extends Audit, PrimaryKey {
  name: string;
}
