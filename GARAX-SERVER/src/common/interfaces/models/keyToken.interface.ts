export interface KeyToken {
  id:string;
  privateKey: Text;
  publicKey: Text;
  refreshToken: string;
  refreshTokenUsed: JSON;
  userId: string;
  created_at: Date;
  updated_at: Date;
}
