import { PrimaryKey } from "../primaryKey.interface";

export interface ItemPermission
extends PrimaryKey {
  itemKeyAccept: string;
  itemValueAccept: string;
  isActive: boolean;
  permissionId: string;
}
