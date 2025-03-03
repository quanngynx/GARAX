export interface CreateKeyTokenRequest {
  userId: string;
  publicKey: string;
  privateKey: string;
  refreshToken: string;
}
