import { IMAGE } from "../constants";

export interface Image {
  id: string;
  image: string;
  coverImage: string;
  alt: string;
  original: string;
  typeSize: IMAGE;
  typeImage: string;
  productId: string;
  created_at: Date;
  updated_at: Date;
}
