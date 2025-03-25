import { PrimaryKey } from '../primaryKey.interface';
import { CartItems } from './cartItems.interface';

export interface Cart extends PrimaryKey {
  sessionId: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  cart_items?: CartItems[];
}
