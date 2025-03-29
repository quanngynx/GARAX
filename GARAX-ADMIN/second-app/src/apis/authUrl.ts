import { BASE } from "./baseUrl";
import { ver_API, ROUTES_AUTH } from "./constants";
import API_CONFIG from '@/utils/axios';
import { AccountLoginRequest } from "./requests";
import { AxiosResponse } from "axios";
import { AccountLoginResponse, AccountLogoutResponse } from "./responses";

export const BASE_LOGIN = `${BASE(ver_API, ROUTES_AUTH)}/login`;
export const BASE_LOGOUT = `${BASE(ver_API, ROUTES_AUTH)}/logout`;
export const BASE_VERIFY_OTP = `${BASE(ver_API, ROUTES_AUTH)}/verify/otp`;

class AuthAPI {
   async login(data: AccountLoginRequest): Promise<AxiosResponse<AccountLoginResponse>> {
    return API_CONFIG.post(
        BASE_LOGIN, 
        data
    )
   }

   async verifyOTP(data: AccountLoginRequest) {
    return API_CONFIG.post(
        BASE_VERIFY_OTP,
        data
    )
   }

   async logout(): Promise<AxiosResponse<AccountLogoutResponse>>  {
    return API_CONFIG.post(
        BASE_LOGOUT
    )
   }
}

export const authApi: AuthAPI = new AuthAPI();