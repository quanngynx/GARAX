import { KeyTokenModel } from "@/models";

interface UserPayload {
  userId: string;
  email: string;
}

export interface HandleRefreshTokenRequest {
  keyStore: KeyTokenModel;
  user: UserPayload;
  refreshToken: string;
}
