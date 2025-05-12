/* eslint-disable @typescript-eslint/no-explicit-any */
import API from "./config/axios.config";

import { BASE } from "./bases/baseUrl";

import { ROUTES_AUTH, ROUTES_OAUTH, ver_API } from "./constants";

import { 
  LoginBody, 
  RegisterBody, 
  TProduct
} from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  VERIFY:`${API_BASE_URL}/auth/verify`,
  GETUSER: `${API_BASE_URL}/auth/users`
};
export default API_ROUTES;

// region --------------------------Auth------------------------------------
export const register = (body: RegisterBody) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/register`, body);

export const login = (body: LoginBody) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/login`, body);

export const logout = (refreshToken: string) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/logout`, { refreshToken });

export const sendEmailOtp = (email: string) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/verify/otp`, { email });

export const checkEmailOtp = (email: string, otp: string) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/check-otp`, { email, otp });

export const resetPassword = (email: string, token: string, newPassword: string) =>
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/reset-password`, { email, token, newPassword });

// region --------------------------OAUTH------------------------------------
export const googleOAuth = (googleCredential: string) => 
  API.post(`${BASE(ver_API, ROUTES_OAUTH)}/google`, { googleCredential });

export const pointerOAuth = (pointerCredential: string) => 
  API.post(`${BASE(ver_API, ROUTES_OAUTH)}/pointer`, { pointerCredential });  

// region --------------------------ACCESS------------------------------------

// region --------------------------Account---------------------------------
export const getAccountInfo = () => 
  API.get('/account');

export const updateAccountInfo = (data: any) => 
  API.patch('/account', data);

export const changePassword = (data: any) => 
  API.patch('/account/change-password', data);

export const getAddresses = () => 
  API.get('/account/addresses');

export const addAddress = (data: any) => 
  API.post('/account/addresses', data);

export const updateAddress = (id: string, data: any) => 
  API.patch(`/account/addresses/${id}`, data);

export const deleteAddress = (id: string) => 
  API.delete(`/account/addresses/${id}`);

// region --------------------------Product---------------------------------
export const getAllProductFromSearch = ({ fields, search, brand, category, page, limit } : TProduct) =>
  API.get(`/products?fields=${fields}&search=${search}&b=${brand}&c=${category}&page=${page}&limit=${limit}`);

export const getAllProduct = (params: string) => 
  API.get('/products', { params });

export const getProductById = (id: string) => 
  API.get(`/products/${id}`);

// --------------------------Cart------------------------------------
export const getCartItems = (pendingData: string) => 
  API.post(`/cart`, { items: pendingData }); // demo route cart

export const addItemToCart = (item: unknown) => 
  API.post(`/cart/add`, item);

// export const increaseQty = (item: unknown) => 
// API.patch(`/cart`, { ...item, delta: 1 });

// export const decreaseQty = (item: unknown) => 
// API.patch(`/cart`, { ...item, delta: -1 });

export const removeItemFromCart = (productId: unknown, sku: unknown) => 
  API.delete(`/cart/${productId}/${sku}`);

export const cleanCart = () => 
  API.delete(`/cart/clean`); 

// --------------------------Order-----------------------------------

// --------------------------PAYOS-----------------------------------
const PAYOS_ORDER_URL = import.meta.env.VITE_APP_ORDER_URL
const PAYOS_LISTS_BANK_URL = import.meta.env.VITE_APP_LISTS_BANK_URL

export const createPaymentPayOSLink = (formData: unknown) => 
  API.post(`${PAYOS_ORDER_URL}/order/create`, { data: formData })

export const getListBank = () => 
  API.get(`${PAYOS_LISTS_BANK_URL}`)

export const getOrder = () => 
  API.get(`${PAYOS_ORDER_URL}`)

export const cancelOrder = (orderId: unknown) => 
  API.post(`${PAYOS_ORDER_URL}/order/${orderId}`)

// --------------------------MOMO-----------------------------------

// --------------------------PRESSPAYPOINTER------------------------

// -----------------------------------------------------------------
export * from './urls/accessUrl';
export * from './urls/accountUrl';
export * from './urls/authUrl';
export * from './urls/cartUrl';
export * from './urls/productUrl';