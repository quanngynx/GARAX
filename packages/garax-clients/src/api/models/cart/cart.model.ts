import { Audit, PrimaryKey } from '../../bases';

export interface Cart 
extends Audit, PrimaryKey {
    sessionId: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    // cart_items?: CartItems[];
}