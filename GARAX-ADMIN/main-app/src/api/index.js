import API from './config/axios.config'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

const PRODUCTS = `${API_BASE_URL}/api/v1/products`

const BASE_ROUTE_PRODUCTS = `/api/v1/products`
// const FAKE_DATA_API = 

const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  VERIFY:`${API_BASE_URL}/auth/verify`,
  GETUSER:`${API_BASE_URL}/auth/users`,
  
  GET_LIST_PRODUCT: PRODUCTS,
  GET_LIST_PRODUCT_BY_ID: PRODUCTS,
  ADD_NEW_PRODUCT: PRODUCTS,
  UPDATE_PRODUCT_BY_ID: PRODUCTS,
  UPDATE_PART_PRODUCT_BY_ID: PRODUCTS,
  DELETE_PRODUCT_BY_ID: PRODUCTS,
  FIND_ALL_PRODUCT_PUBLISH: PRODUCTS + `/pub`,
  FIND_ALL_PRODUCT: PRODUCTS,
};

export default API_ROUTES

export const getAllProduct = () => 
  API.get(`${BASE_ROUTE_PRODUCTS}`)

export const getProductById = (id) => 
  API.get(`${BASE_ROUTE_PRODUCTS}/${id}`)

export const addNewProduct = () => 
  API.post(`${BASE_ROUTE_PRODUCTS}`)

