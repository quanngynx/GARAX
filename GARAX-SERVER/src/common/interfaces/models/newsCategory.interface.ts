import { PrimaryKey } from '../primaryKey.interface';

export interface NewsCategory extends PrimaryKey {
  title: string;
  alias: string;
  description: string;
  isActive: string;
  createDate: Date;
}
