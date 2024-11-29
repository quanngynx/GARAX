import { ROOTS } from "./constants/constants";

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

export const PATH_AUTH = {
  login: path(ROOTS.AUTH, '/login'),
  loginUnprotected: path(ROOTS.AUTH, '/login-unprotected'),
  register: path(ROOTS.AUTH, '/register'),
  registerUnprotected: path(ROOTS.AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS.AUTH, '/reset-password'),
  verify: path(ROOTS.AUTH, '/verify'),
  delete: path(ROOTS.AUTH, '/delete-account')
};

export const PATH_DASHBOARD = {
  general: {
    statics: path(ROOTS.DASHBOARD, '/statics'),
    orders: path(ROOTS.DASHBOARD, '/orders')
  },
  app: {
    root: path(ROOTS.DASHBOARD, ''),
    categories: path(ROOTS.DASHBOARD, '/categories'),
    brands: path(ROOTS.DASHBOARD, '/brands'),
    discounts: path(ROOTS.DASHBOARD, '/discounts'),
    products: {
      root: path(ROOTS.DASHBOARD, '/products'),
      list: path(ROOTS.DASHBOARD, '/products/list'),
      add: path(ROOTS.DASHBOARD, '/products/create')
    },
    users: {
      root: path(ROOTS.DASHBOARD, '/users'),
      customer_list: path(ROOTS.DASHBOARD, '/users/customer/list'),
      staff_list: path(ROOTS.DASHBOARD, '/users/staff/list')
    },
    account_setting: path(ROOTS.DASHBOARD, '/setting'),
    profile: path(ROOTS.DASHBOARD, '/profile')
  },

  // region ====================================================
  admin: {
    root: path(ROOTS.DASHBOARD, ''),
    statictists: {
        root: path(ROOTS.DASHBOARD, '/statictists'),
    },
    products: {
        root: path(ROOTS.DASHBOARD, '/products-grid'),
        list: path(ROOTS.DASHBOARD, '/products/list'),
        brands: path(ROOTS.DASHBOARD, '/products/brands'),
        top_products: path(ROOTS.DASHBOARD, '/products/top-products'),
        add: path(ROOTS.DASHBOARD, '/products/create')
    },
    booking: {
        root: path(ROOTS.DASHBOARD, '/booking-grid'),
        list: path(ROOTS.DASHBOARD, '/products/list'),
        add: path(ROOTS.DASHBOARD, '/products/create')
    },
    orders: {
        root: path(ROOTS.DASHBOARD, '/orders-grid'),
        list: path(ROOTS.DASHBOARD, '/products/list'),
        add: path(ROOTS.DASHBOARD, '/products/create')
    },
    reviews: {
        root: path(ROOTS.DASHBOARD, '/reviews'),
        list: path(ROOTS.DASHBOARD, '/reviews/list'),
    },
    users: {
      root: path(ROOTS.DASHBOARD, '/users'),
      customer_list: path(ROOTS.DASHBOARD, '/users/customer/list'),
      staff_list: path(ROOTS.DASHBOARD, '/users/staff/list')
    },
    account_setting: path(ROOTS.DASHBOARD, '/setting'),
    profile: path(ROOTS.DASHBOARD, '/profile')
  }
};