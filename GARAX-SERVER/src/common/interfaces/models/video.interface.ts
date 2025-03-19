import { Audit } from "../audit.interface";

export interface Video
extends Audit{
  id: string;
  directoryPath: string;
  alt: string;
  original: string;
}
