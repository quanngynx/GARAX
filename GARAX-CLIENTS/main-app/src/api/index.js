// require('dotenv').config();

const API_BASE_URL = "http://localhost:5001";

const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  // Add more routes as needed
};

export default API_ROUTES;