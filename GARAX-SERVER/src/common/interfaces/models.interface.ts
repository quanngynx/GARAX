import { AccountModel, AddressModel, ApiKeyModel, ItemPermissionModel, PermissionModel } from "@/models";

export interface Models {
  Account: typeof AccountModel;
  Address: typeof AddressModel;
  ItemPermission: typeof ItemPermissionModel;
  Permission: typeof PermissionModel;
  ApiKey: typeof ApiKeyModel;
}
