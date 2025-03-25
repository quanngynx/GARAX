import { Audit } from '../audit.interface';
import { PrimaryKey } from '../primaryKey.interface';

export interface Video extends Audit, PrimaryKey {
  directoryPath: string;
  alt: string;
  original: string;
}
