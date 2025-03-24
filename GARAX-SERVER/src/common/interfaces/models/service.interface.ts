import { PrimaryKey } from "../primaryKey.interface";

export interface Service
extends PrimaryKey {
  serviceCategoryId: number;
  serviceImageId: number;
  title: string;
  alias: string;
  description: string;
  isActive: string;
  createdAt: Date;
  updatedAt: Date;
}
