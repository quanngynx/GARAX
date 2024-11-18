import API from "./config/axios.config";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
// const FAKE_DATA_API = 

const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  VERIFY:`${API_BASE_URL}/auth/verify`,
  GETUSER: `${API_BASE_URL}/auth/users`
};
export default API_ROUTES;

// --------------------------Product---------------------------------
export const getAllProducts = () =>
  API.get(`/products`);
export const getProductById = (id) => 
  API.get(`/products/${id}`);


// ----------------------------PAYOS---------------------------------
export const createPaymentPayOSLink = (formData) => 
  API.post(`${import.meta.env.VITE_APP_ORDER_URL}/order/create`, { data: formData }) // this is a demo route from my server 

export const getListBank = () => 
  API.get(`${import.meta.env.VITE_APP_LISTS_BANK_URL}`)

export const getOrder = () => 
  API.get(`${import.meta.env.VITE_APP_ORDER_URL}`)

export const cancelOrder = (orderId) => 
  API.post(`${import.meta.env.VITE_APP_ORDER_URL}/order/${orderId}`)