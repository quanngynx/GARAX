import { Account } from "@/common/interfaces";

export interface LoginRequest
extends Pick<Account,
| 'email'
| 'password'
>{
  refreshToken: string;
}
