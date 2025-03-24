import { IMAGE } from "../../constants";
import { Audit } from '../audit.interface';
import { PrimaryKey } from "../primaryKey.interface";

export interface Image
extends Audit, PrimaryKey{
  image: string;
  coverImage: string;
  alt: string;
  original: string;
  typeSize: IMAGE;
  typeImage: string;
  productId: string;
}
