export interface CreateKeyTokenRequest {
  userId: string;
  privateKey: string;
  publicKey: string;
  refreshToken?: string;
}
