import { PrimaryKey } from '../primaryKey.interface';

export interface SpecificationDetailProduct extends PrimaryKey {
  groupName: string;
  groupKey: string;
  groupValue: string;
  isOriginalProduct: boolean;
}
