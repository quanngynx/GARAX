import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface AttributeValues extends PrimaryKey, Audit {
  name: string;
}
