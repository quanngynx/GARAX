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
    root: path(ROOTS.DASHBOARD, '/app'),
    categories: path(ROOTS.DASHBOARD, '/app/categories'),
    brands: path(ROOTS.DASHBOARD, '/app/brands'),
    discounts: path(ROOTS.DASHBOARD, '/app/discounts'),
    products: {
      root: path(ROOTS.DASHBOARD, '/app/products'),
      list: path(ROOTS.DASHBOARD, '/app/products/list'),
      add: path(ROOTS.DASHBOARD, '/app/products/create')
    },
    users: {
      root: path(ROOTS.DASHBOARD, '/app/users'),
      customer_list: path(ROOTS.DASHBOARD, '/app/users/customer/list'),
      staff_list: path(ROOTS.DASHBOARD, '/app/users/staff/list')
    },
    account_setting: path(ROOTS.DASHBOARD, '/app/setting'),
    profile: path(ROOTS.DASHBOARD, '/app/profile')
  }
};