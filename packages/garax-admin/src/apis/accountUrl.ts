import { AxiosResponse } from 'axios';
import API_CONFIG from '@/utils/axios';
import { BASE } from './baseUrl';
import { ROUTER_ACCOUNT, ver_API } from './constants';
import { GetInfoAccountResponse } from './responses';

export const BASE_GET_INFO_ACCOUNT = `${BASE(ver_API, ROUTER_ACCOUNT)}`;

class AccountAPI  {
    async getInfoUserByEmail(
        email: string
    ): Promise<AxiosResponse<GetInfoAccountResponse>> {
        return API_CONFIG.get(
            BASE_GET_INFO_ACCOUNT, { 
                params: { 
                    email: email
                } 
            }
        )
    }
}

export const accountAPI: AccountAPI = new AccountAPI();