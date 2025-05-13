import { BASE } from "../bases/baseUrl";
import { ver_API, ROUTES_AUTH } from "../constants";
import API_CONFIG from '../config/axios.config';
import { AccountLoginRequest } from "../requests";
import { AxiosResponse } from "axios";
import { AccountLoginResponse, AccountRegisterResponse } from "../responses";

export const BASE_LOGIN = `${BASE(ver_API, ROUTES_AUTH)}/login`;
export const BASE_REGISTER = `${BASE(ver_API, ROUTES_AUTH)}/register`;
export const BASE_LOGOUT = `${BASE(ver_API, ROUTES_AUTH)}/logout`;
export const BASE_VERIFY_OTP = `${BASE(ver_API, ROUTES_AUTH)}/verify/otp`;

class AuthAPI {
   async login(data: AccountLoginRequest)
   : Promise<AxiosResponse<AccountLoginResponse>> {
    return API_CONFIG.post(
        BASE_LOGIN, 
        data
    );
   }

   async register(data: AccountLoginRequest)
   : Promise<AxiosResponse<AccountRegisterResponse>> {
    return API_CONFIG.post(
        BASE_REGISTER, 
        data
    );
   }

   async verifyOTP(data: AccountLoginRequest) {
    return API_CONFIG.post(
        BASE_VERIFY_OTP,
        data
    );
   }

   async logout() {
    return API_CONFIG.post(
        BASE_LOGOUT
    );
   }
}

export const authApi: AuthAPI = new AuthAPI();