import { BaseResponse } from "@/apis/bases/response";

export interface AccountLoginMetadata {
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

export type AccountLoginResponse = 
BaseResponse<AccountLoginMetadata>
