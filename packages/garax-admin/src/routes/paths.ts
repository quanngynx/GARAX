import { ROOTS } from "./constants/constants";

function path(root: string, subLink: string) {
    return `${root}${subLink}`;
}

export const PATH_AUTH = {
    login: path(ROOTS.AUTH, "/login"),
    loginUnprotected: path(ROOTS.AUTH, "/login-unprotected"),
    register: path(ROOTS.AUTH, "/register"),
    registerUnprotected: path(ROOTS.AUTH, "/register-unprotected"),
    resetPassword: path(ROOTS.AUTH, "/reset-password"),
    verify: path(ROOTS.AUTH, "/verify"),
    delete: path(ROOTS.AUTH, "/delete-account"),
};

export const PATH_DASHBOARD = {
    general: {
        statics: path(ROOTS.DASHBOARD, "/statics"),
        orders: path(ROOTS.DASHBOARD, "/orders"),
    },
    app: {
        root: path(ROOTS.DASHBOARD, ""),
        categories: path(ROOTS.DASHBOARD, "/categories"),
        brands: path(ROOTS.DASHBOARD, "/brands"),
        discounts: path(ROOTS.DASHBOARD, "/discounts"),
        products: {
            root: path(ROOTS.DASHBOARD, "/products"),
            list: path(ROOTS.DASHBOARD, "/products/list"),
            add: path(ROOTS.DASHBOARD, "/products/create"),
        },
        users: {
            root: path(ROOTS.DASHBOARD, "/users"),
            customer_list: path(ROOTS.DASHBOARD, "/users/customer/list"),
            staff_list: path(ROOTS.DASHBOARD, "/users/staff/list"),
        },
        account_setting: path(ROOTS.DASHBOARD, "/setting"),
        profile: path(ROOTS.DASHBOARD, "/profile"),
    },

    // region ====================================================
    admin: {
        root: path(ROOTS.DASHBOARD, ""),
        statictists: {
            root: path(ROOTS.DASHBOARD, "/statistic"),
            list: path(ROOTS.DASHBOARD, "/statistics"),
            transactions: path(ROOTS.DASHBOARD, "/statistics/transactions"),
            revenue : path(ROOTS.DASHBOARD, "/statistics/revenue"),
        },
        products: {
            root: path(ROOTS.DASHBOARD, "/products-grid"),

            list: path(ROOTS.DASHBOARD, "/products-management"),
            detail: path(ROOTS.DASHBOARD, "/products-management/[slug]"),
            edit: path(ROOTS.DASHBOARD, "/products-management/[slug]/edit"),
            add: path(ROOTS.DASHBOARD, "/products-management/add"),

            brands: path(ROOTS.DASHBOARD, "/brands"),
            partners: path(ROOTS.DASHBOARD, "/partners"),
            top_products: path(ROOTS.DASHBOARD, "/top-products"),
        },
        booking: {
            root: path(ROOTS.DASHBOARD, "/booking-grid"),
            list: path(ROOTS.DASHBOARD, "/booking-management"),
            detail: path(ROOTS.DASHBOARD, "/booking-management/[slug]"),
            edit: path(ROOTS.DASHBOARD, "/booking-management/[slug]/edit"),
            add: path(ROOTS.DASHBOARD, "/booking-management/add"),
        },
        orders: {
            root: path(ROOTS.DASHBOARD, "/orders-grid"),
            list: path(ROOTS.DASHBOARD, "/orders-management"),
            add: path(ROOTS.DASHBOARD, "/orders-management/create"),
        },
        transactions: {
            root: path(ROOTS.DASHBOARD, "/transactions"),
            details: path(ROOTS.DASHBOARD, "/transactions/[slug]"),
        },
        reviews: {
            root: path(ROOTS.DASHBOARD, "/review"),
            list: path(ROOTS.DASHBOARD, "/reviews"),
            details: path(ROOTS.DASHBOARD, "/reviews/[slug]"),
        },
        users: {
            root: path(ROOTS.DASHBOARD, "/users"),
            permission: path(ROOTS.DASHBOARD, "/users/permission"),
            access_management: path(ROOTS.DASHBOARD, "/users/access-management"),
        },
        account_setting: path(ROOTS.DASHBOARD, "/setting"),
        settings: {
            root: path(ROOTS.DASHBOARD, "/setting"),
            profile: path(ROOTS.DASHBOARD, "/setting/profile"),
            theme: path(ROOTS.DASHBOARD, "/setting/theme-management"),
            account: path(ROOTS.DASHBOARD, "/setting/account"),
            notification: path(ROOTS.DASHBOARD, "/setting/notification"),
            history_access: path(ROOTS.DASHBOARD, "/setting/history-access"),
        },
        theme: path(ROOTS.DASHBOARD, "/theme-management"),
        profile: path(ROOTS.DASHBOARD, "/profile"),
    },
};
