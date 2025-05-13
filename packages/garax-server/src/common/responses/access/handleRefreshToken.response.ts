import { Account, KeyToken } from '@/common/interfaces';

interface UserPayload extends Pick<Account, 'email'> {
  userId: number;
}

export interface PairToken extends Pick<KeyToken, 'refreshToken'> {
  accessToken: string;
}
export interface HandleRefreshTokenResponse {
  user: UserPayload;
  tokens: PairToken;
}
