export interface CreateKeyTokenRequest {
  userId: number;
  privateKey: string;
  publicKey: string;
  refreshToken?: string;
}
