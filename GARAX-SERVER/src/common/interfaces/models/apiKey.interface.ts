import { PrimaryKey } from "../primaryKey.interface";

export interface ApiKey
extends PrimaryKey {
  key: string;
  isActive: boolean;
  itemPermissionId: number;
  permissionId: number;
}
