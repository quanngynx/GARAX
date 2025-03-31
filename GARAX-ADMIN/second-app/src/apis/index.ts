/* eslint-disable @typescript-eslint/no-explicit-any */
export * from "./constants/constants";

import API from "@/utils/axios";

import { BASE } from "./constants/baseUrl";

import {
    ROUTER_ACCOUNT,
    ROUTES_AUTH,
    ROUTES_BOOKING,
    ROUTES_ORDERS,
    ROUTES_PRODUCTS,
    ROUTES_TRANSACTIONS,
    ver_API,
} from "./constants";
import { IGetAllDataTable, IGetAllProduct } from "./requests/interfaces";
import { 
    TLoginBody, 
    TRegisterBody 
} from './types';

// region --------------------------AUTH--------------------------------------
export const register = (body: TRegisterBody, ) => 
  API.post(
    `${BASE(ver_API, ROUTES_AUTH)}/register`, 
    body
);

export const login = (body: TLoginBody) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/login`, body);

export const logout = (refreshToken: string) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/logout`, { refreshToken });

export const verifyEmailByOtp = (email: string) => 
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/verify/otp`, { email });

// export const checkEmailOtp = (email: string, otp: string) => 
//   API.post(`${BASE(ver_API, ROUTES_AUTH)}/check-otp`, { email, otp });

export const resetPassword = (email: string, token: string, newPassword: string) =>
  API.post(`${BASE(ver_API, ROUTES_AUTH)}/reset-password`, { email, token, newPassword });

// region --------------------------ACCOUNT-----------------------------------
export const getAccountInfo = (signal?: AbortSignal) => API.get(
    `${BASE(ver_API, ROUTER_ACCOUNT)}`,
    { signal }
);

// region --------------------------ACCOUNTS-----------------------------------
export const getAllAccount = (signal?: AbortSignal) => API.get(
    `${BASE(ver_API, ROUTER_ACCOUNT)}`,
    { signal }
);

// region --------------------------ACCESS------------------------------------

// region --------------------------PRODUCTS-----------------------------------
export const getAllProducts = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
}: IGetAllProduct) =>
    API.get(
        `${BASE(ver_API, ROUTES_PRODUCTS)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`
    );

export const createProduct = (newProduct : any) => 
    API.post(`${BASE(ver_API, ROUTES_PRODUCTS)}`, newProduct);
export const updateProduct = (updatedProduct: any) => 
    API.patch(`${BASE(ver_API, ROUTES_PRODUCTS)}`, updatedProduct);
export const changeStateProduct = (state: any) => 
    API.patch(`${BASE(ver_API, ROUTES_PRODUCTS)}/to-state`, state);
export const deleteProduct = (id: string) => 
    API.delete(`${BASE(ver_API, ROUTES_PRODUCTS)}?id=${id}`);
// region --------------------------CART--------------------------------------

// region --------------------------ORDER-------------------------------------
export const getAllOrders = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
}: IGetAllProduct) =>
    API.get(
        `${BASE(ver_API, ROUTES_ORDERS)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`,
    );

export const createOrder = (newOrder : any) => 
    API.post(`${BASE(ver_API, ROUTES_ORDERS)}`, newOrder);
export const updateOrder = (updatedOrder: any) => 
    API.patch(`${BASE(ver_API, ROUTES_ORDERS)}`, updatedOrder);
// export const changeStateOrder = (state: any) => 
// API.patch(`${BASE(ver_API, ROUTES_ORDERS)}/to-state`, state);
export const deleteOrder = (id: string) => 
    API.delete(`${BASE(ver_API, ROUTES_ORDERS)}?id=${id}`);
// region --------------------------BOOKING-----------------------------------
export const getAllBooking = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
}: IGetAllProduct) =>
    API.get(
        `${BASE(ver_API, ROUTES_BOOKING)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`,
    );

// region --------------------------TRANSACTION-------------------------------
export const getAllTransactions = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
}: IGetAllProduct) =>
    API.get(
        `${BASE(ver_API, ROUTES_TRANSACTIONS)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`,  
    );
// region --------------------------USERS-------------------------------
export const getAllUsers = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
    ROUTES
}: IGetAllProduct) =>
    API.get(
        `${BASE(ver_API, ROUTES)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`,  
    );

// region --------------------------PERMISSIONS-------------------------------

// region --------------------------THEME-------------------------------------


/**
 * @LOQ-burh
 * @description test function: reuse func call api - get data table
 */
export const getAllDataTable = ({
    fields,
    search,
    brand,
    category,
    page,
    per_page,
    limit,
    offset,
    ROUTES
}: IGetAllDataTable) =>
    API.get(
        `${BASE(ver_API, ROUTES)}?` +
        `page=${page}&` +
        `per_page=${per_page}&` +
        `limit=${limit}` +
        `${offset ? `&offset=${offset}` : ""}` +
        `${fields ? `&fields=${fields}` : ""}` +
        `${search ? `&search=${search}` : ""}` +
        `${brand ? `&brand=${brand}` : ""}` +
        `${category ? `&category=${category}` : ""}`,  
    );