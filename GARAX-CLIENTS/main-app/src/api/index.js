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

// --------------------------Auth------------------------------------
// --------------------------Account---------------------------------
// --------------------------Product---------------------------------
export const getAllProducts = () =>
  API.get(`/products`);
export const getProductById = (id) => 
  API.get(`/products/${id}`);

// --------------------------Cart------------------------------------
export const getCartItems = (pendingData) => API.post(`/cart`, { items: pendingData }); // demo route cart
export const addItemToCart = (item) => API.post(`/cart/add`, item);
export const increaseQty = (item) => API.patch(`/cart`, { ...item, delta: 1 });
export const decreaseQty = (item) => API.patch(`/cart`, { ...item, delta: -1 });
export const removeItemFromCart = (productId, sku) => API.delete(`/cart/${productId}/${sku}`);
export const cleanCart = () => API.delete(`/cart/clean`); 

// --------------------------Order-----------------------------------

// --------------------------PAYOS-----------------------------------
const PAYOS_ORDER_URL = import.meta.env.VITE_APP_ORDER_URL
const PAYOS_LISTS_BANK_URL = import.meta.env.VITE_APP_LISTS_BANK_URL

export const createPaymentPayOSLink = (formData) => 
  API.post(`${PAYOS_ORDER_URL}/order/create`, { data: formData }) // this is a demo route from my server 

export const getListBank = () => 
  API.get(`${PAYOS_LISTS_BANK_URL}`)

export const getOrder = () => 
  API.get(`${PAYOS_ORDER_URL}`)

export const cancelOrder = (orderId) => 
  API.post(`${PAYOS_ORDER_URL}/order/${orderId}`)

// --------------------------MOMO-----------------------------------

// --------------------------PRESSPAYPOINTER------------------------