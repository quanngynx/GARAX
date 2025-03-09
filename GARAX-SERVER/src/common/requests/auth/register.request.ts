import { Account } from "@/common/interfaces";

export interface RegisterRequest
extends Pick<Account,
| 'userName'
| 'email'
| 'password'
| 'roleId'
> {}
