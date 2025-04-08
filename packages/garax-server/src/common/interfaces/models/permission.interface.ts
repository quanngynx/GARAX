import { PrimaryKey } from '../primaryKey.interface';

export interface Permission extends PrimaryKey {
  keyAccept: string;
  valueAccept: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
