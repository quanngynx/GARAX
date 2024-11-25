'use client';

import axios, { AxiosRequestConfig } from 'axios';
// import { useRouter } from 'next/navigation';

import { NEXT_HOST_API } from '../constants';

//----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: NEXT_HOST_API });

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem('token');
    // if (token && config.headers) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => {
    if(res && res.data) {
      return res.data
    }
    return res
  },
  async (error) => {
    //  const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    // if (error.response && error.response.status === 401) {
    //   const originalRequest = error.config;
    //     try {
    //       const refreshToken = localStorage.getItem('refreshToken');
    //       const response = await axios.post('/api/refresh-token', { refreshToken });
    //       const { token } = response.data;
  
    //       localStorage.setItem('token', token);
  
    //       // Retry the original request with the new token
    //       originalRequest.headers.Authorization = `Bearer ${token}`;
          
    //       return axios(originalRequest);
    //     } catch (error) {
    //       const router = useRouter();
    //       console.log('lỗi axios với refresh-token::', error)
    //       router.push('');
    //     }
    // }
    return Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    );
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

// export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
//   const [url, config] = Array.isArray(args) ? args : [args];
//   const res = await axiosInstance.get(url, { ...config });

//   return res.data;
// };
