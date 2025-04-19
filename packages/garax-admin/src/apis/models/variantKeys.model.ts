import { Audit, PrimaryKey } from "../bases";

export interface VariantKeysModel extends Audit, PrimaryKey {
  key: string;
}
