import { AccountModel } from "@/api/models";

export type AccountRegisterRequest = Pick<AccountModel,
| 'userName'
| 'email'
| 'password'
>
