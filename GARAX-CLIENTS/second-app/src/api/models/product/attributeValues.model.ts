import { Audit, PrimaryKey } from "@/api/bases";

export interface AttributeValues extends Audit, PrimaryKey {
  name: string;
}
