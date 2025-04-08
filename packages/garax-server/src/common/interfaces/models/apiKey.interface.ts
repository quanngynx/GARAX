import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface ApiKey extends PrimaryKey, Audit {
  key: string;
  isActive: boolean;
  itemPermissionId: number;
  permissionId: number;
}
