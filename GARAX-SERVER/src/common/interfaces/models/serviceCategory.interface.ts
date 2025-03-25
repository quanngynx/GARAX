import { PrimaryKey } from '../primaryKey.interface';

export interface ServiceCategory extends PrimaryKey {
  title: string;
  alias: string;
  createdAt: Date;
  updatedAt: Date;
}
