import { BaseResponse } from "../bases/response";

export interface AccountRegisterMetadata {
  user: {
    userName: string;
    email: string;
    roleId: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export type AccountRegisterResponse = 
BaseResponse<AccountRegisterMetadata>
