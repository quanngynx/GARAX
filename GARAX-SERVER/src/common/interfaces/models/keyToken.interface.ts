export interface KeyToken {
  id:string;
  privateKey: string;
  publicKey: string;
  refreshToken: string;
  refreshTokenUsed: JSON;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
