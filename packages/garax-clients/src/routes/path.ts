// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
    return `${root}${subLink}`;
  }
  
  const ROOTS_AUTH = '/auth';
  const ROOTS_CLIENT = '/home';
  const ROOTS_DASHBOARD = '/dashboard';
  
  // ----------------------------------------------------------------------
  
  export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
    register: path(ROOTS_AUTH, '/register'),
    registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
    resetPassword: path(ROOTS_AUTH, '/reset-password'),
    verify: path(ROOTS_AUTH, '/verify')
  };

  export const PATH_CLIENT = {
    root: ROOTS_CLIENT,
    login: path(ROOTS_CLIENT, '/login'),
    loginUnprotected: path(ROOTS_CLIENT, '/login-unprotected'),
    register: path(ROOTS_CLIENT, '/register'),
    registerUnprotected: path(ROOTS_CLIENT, '/register-unprotected'),
    resetPassword: path(ROOTS_CLIENT, '/reset-password'),
    verify: path(ROOTS_CLIENT, '/verify')
  }
  
  export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
      statics: path(ROOTS_DASHBOARD, '/statics'),
      orders: path(ROOTS_DASHBOARD, '/orders')
    },
    app: {
      root: path(ROOTS_DASHBOARD, '/app'),
      categories: path(ROOTS_DASHBOARD, '/app/categories'),
      brands: path(ROOTS_DASHBOARD, '/app/brands'),
      discounts: path(ROOTS_DASHBOARD, '/app/discounts'),
      products: {
        root: path(ROOTS_DASHBOARD, '/app/products'),
        list: path(ROOTS_DASHBOARD, '/app/products/list'),
        add: path(ROOTS_DASHBOARD, '/app/products/create')
      },
      users: {
        root: path(ROOTS_DASHBOARD, '/app/users'),
        customer_list: path(ROOTS_DASHBOARD, '/app/users/customer/list'),
        staff_list: path(ROOTS_DASHBOARD, '/app/users/staff/list')
      },
      account_setting: path(ROOTS_DASHBOARD, '/app/setting'),
      profile: path(ROOTS_DASHBOARD, '/app/profile')
    }
  };
  