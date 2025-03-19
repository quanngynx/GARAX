import { Audit } from "../audit.interface";

export interface AttributeValues
extends Audit {
  id: string;
  name: string;
}
