import { Audit, PrimaryKey } from "../bases";

export interface AttributeValues extends Audit, PrimaryKey {
  name: string;
}
