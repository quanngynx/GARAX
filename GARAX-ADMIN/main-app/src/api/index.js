// require('dotenv').config();

// const express = require('express'); 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
// const FAKE_DATA_API = 

const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  VERIFY:`${API_BASE_URL}/auth/verify`,
  GETUSER:`${API_BASE_URL}/auth/users`,
  
};

export default API_ROUTES;