import axios from "axios";
// import { useNavigate } from 'react-router-dom'

// const _PORT = import.meta.env.PORT || 5004;
const NODE_LOCAL_API = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = `http://localhost:${String(_PORT)}`;

const API = axios.create({
  baseURL: NODE_LOCAL_API,
  headers: {
    "Content-Type": "application/json",
    //   'x-api-key': import.meta.env.VITE_SECRET_API_KEY
  },
  // withCredentials: true,
  // credentials: 'include',
});

// API.defaults.withCredentials = true
// axios.defaults.withCredentials = true
axios.defaults.baseURL = NODE_LOCAL_API

API.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    if(response && response.data) {
      return response
    }
    return response
  },
  async (error) => {
    // const originalRequest = error.config;

    // // If the error status is 401 and there is no originalRequest._retry flag,
    // // it means the token has expired and we need to refresh it
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     const refreshToken = localStorage.getItem('refreshToken');
    //     const response = await axios.post('/api/refresh-token', { refreshToken });
    //     const { token } = response.data;

    //     localStorage.setItem('token', token);

    //     // Retry the original request with the new token
    //     originalRequest.headers.Authorization = `Bearer ${token}`;
    //     return axios(originalRequest);
    //   } catch (error) {
    //     const navigate = useNavigate()
    //     console.log('lỗi axios với refresh-token::', error)
    //     navigate('')
    //   }
    // }

    return Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    );
  }
);
export default API