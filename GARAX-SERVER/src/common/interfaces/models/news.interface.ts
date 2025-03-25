import { PrimaryKey } from '../primaryKey.interface';

export interface News extends PrimaryKey {
  title: string;
  alias: string;
  description: string;
  detail: string;
  image: string;
  category: string;
  isActive: boolean;
  createDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
