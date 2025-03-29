import { BaseResponse } from "@/apis/bases/response";

export interface AccountLogoutMetadata {
    delKey: number;
}

export type AccountLogoutResponse = 
BaseResponse<AccountLogoutMetadata>
