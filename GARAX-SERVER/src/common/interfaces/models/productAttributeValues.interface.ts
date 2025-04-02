import { Audit } from '../audit.interface';
import { AttributeValues } from './attributeValues.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface ProductAttributeValues extends Audit, PrimaryKey {
  value: string;
  productId: number;
  attributeId: number;
  attribute_values?: AttributeValues;
}
