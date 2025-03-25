import { IMAGE } from '../constants';
import { Audit } from '../interfaces';

export interface Image
extends Audit{
  id: string;
  image: string;
  coverImage: string;
  alt: string;
  original: string;
  typeSize: IMAGE;
  typeImage: string;
  productId: string;
}
