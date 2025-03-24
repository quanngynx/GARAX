import { KeyToken } from "../interfaces";

export interface CreateKeyTokenRequest
extends Pick<KeyToken,
| 'userId'
| 'privateKey'
| 'publicKey'
// | 'refreshToken'
> {
  refreshToken?: string;
}
