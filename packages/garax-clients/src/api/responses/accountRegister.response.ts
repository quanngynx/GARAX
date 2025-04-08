import { BaseResponse } from "../bases/response";

export interface AccountRegisterMetadata {
  code: number;
  message: string;
}

export type AccountRegisterResponse = 
BaseResponse<AccountRegisterMetadata>
