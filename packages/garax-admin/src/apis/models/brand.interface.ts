import { PrimaryKey } from "../bases";

export interface BrandModel extends PrimaryKey {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
