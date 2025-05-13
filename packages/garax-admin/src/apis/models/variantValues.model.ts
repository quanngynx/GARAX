import { Audit, PrimaryKey } from "../bases";

export interface VariantValuesModel extends Audit, PrimaryKey {
  value: string;
  variantKeyId: number;
}
