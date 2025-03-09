export interface KeyToken {
  id:string;
  privateKey: string;
  publicKey: string;
  refreshToken: string;
  refreshTokenUsed: JSON;
  userId: string;
  created_at?: Date;
  updated_at?: Date;
}
