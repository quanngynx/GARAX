import { Audit, PrimaryKey } from '../../bases';

export interface Cart 
extends Audit, PrimaryKey {
    sessionId: string;
    userId: number;
    // cart_items?: CartItems[];
}