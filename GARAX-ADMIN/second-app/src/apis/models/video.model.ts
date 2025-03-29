import { Audit } from "../interfaces";

export interface Video
extends Audit{
  id: string;
  directoryPath: string;
  alt: string;
  original: string;
}
