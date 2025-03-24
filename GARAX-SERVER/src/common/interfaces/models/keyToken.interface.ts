import { PrimaryKey } from '../primaryKey.interface';

export interface KeyToken extends PrimaryKey {
  privateKey: string;
  publicKey: string;
  refreshToken: string;
  refreshTokenUsed: JSON;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
