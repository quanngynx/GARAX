'use client';

import axios from 'axios';
// import { useRouter } from 'next/navigation';

import { NODE_LOCAL_API } from '../constants';
import { useRouter } from 'next/router';

//----------------------------------------------------------------------

const axiosInstance = axios.create({ 
    baseURL: NODE_LOCAL_API,
    // headers: {
    //   'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${accessToken}`,
    //   //   'x-api-key': import.meta.env.VITE_SECRET_API_KEY,
    // }, 
    // withCredentials: true,
    // credentials: 'include',
});

// axios.defaults.withCredentials = true
axios.defaults.baseURL = NODE_LOCAL_API

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
  (response) => {
    if(response && response.data) {
      return response.data
    }
    return response
  },
  async (error) => {
    //  const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axios.post('/api/refresh-token', { refreshToken });
          const { token } = response.data;
  
          localStorage.setItem('token', token);
  
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          
          return axios(originalRequest);
        } catch (error) {
          const router = useRouter();
          console.log('error axios with refresh-token::', error)
          router.push('');
        }
    }
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
