import { Account } from "@/common/interfaces";
import { KeyTokenModel } from "@/models";

interface UserPayload
extends Pick<Account,
 | 'email'
>{
  userId: string;
}

export interface HandleRefreshTokenRequest {
  keyStore: KeyTokenModel;
  user: UserPayload;
  refreshToken: string;
}
