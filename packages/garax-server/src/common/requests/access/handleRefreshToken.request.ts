import { Account } from '@/common/interfaces';
import { KeyTokenModel } from '@/models';

export interface UserPayload extends Pick<Account, 'email'> {
  userId: number;
}

export interface HandleRefreshTokenRequest {
  keyStore: KeyTokenModel;
  user: UserPayload;
  refreshToken: string;
}
