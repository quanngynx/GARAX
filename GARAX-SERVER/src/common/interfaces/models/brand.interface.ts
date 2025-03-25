import { PrimaryKey } from '../primaryKey.interface';

export interface Brand extends PrimaryKey {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
