import { PrimaryKey } from '../primaryKey.interface';

export interface SpecificationProduct extends PrimaryKey {
  name: string;
  key: string;
  value: string;
  isOriginalProduct: boolean;
  createdAt: Date;
  updatedAt: Date;
}
