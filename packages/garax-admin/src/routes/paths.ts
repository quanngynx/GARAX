import { ROOTS } from "./constants/constants";

function path(root: string, subLink: string) {
    return `${root}${subLink}`;
}

const auth = ROOTS.AUTH;
const dashboard = ROOTS.DASHBOARD;

export const PATH_AUTH = {
    login: path(auth, "/login"),
    loginUnprotected: path(auth, "/login-unprotected"),
    register: path(auth, "/register"),
    registerUnprotected: path(auth, "/register-unprotected"),
    resetPassword: path(auth, "/reset-password"),
    verify: path(auth, "/verify"),
    delete: path(auth, "/delete-account"),
};

export const PATH_DASHBOARD = {
    general: {
        statics: path(dashboard, "/statics"),
        orders: path(dashboard, "/orders"),
    },
    app: {
        root: path(dashboard, ""),
        categories: path(dashboard, "/categories"),
        brands: path(dashboard, "/brands"),
        discounts: path(dashboard, "/discounts"),
        products: {
            root: path(dashboard, "/products"),
            list: path(dashboard, "/products/list"),
            add: path(dashboard, "/products/create"),
        },
        users: {
            root: path(dashboard, "/users"),
            customer_list: path(dashboard, "/users/customer/list"),
            staff_list: path(dashboard, "/users/staff/list"),
        },
        account_setting: path(dashboard, "/setting"),
        profile: path(dashboard, "/profile"),
    },

    // region ====================================================
    admin: {
        root: path(dashboard, ""),
        statictists: {
            root: path(dashboard, "/statistic"),
            list: path(dashboard, "/statistics"),
            transactions: path(dashboard, "/statistics/transactions"),
            revenue : path(dashboard, "/statistics/revenue"),
        },
        products: {
            root: path(dashboard, "/products-grid"),

            list: path(dashboard, "/products-management"),
            detail: path(dashboard, "/products-management/[slug]"),
            edit: path(dashboard, "/products-management/[slug]/edit"),
            add: path(dashboard, "/products-management/add"),

            brands: path(dashboard, "/brands"),
            partners: path(dashboard, "/partners"),
            top_products: path(dashboard, "/top-products"),
        },
        booking: {
            root: path(dashboard, "/booking-grid"),
            list: path(dashboard, "/booking-management"),
            detail: path(dashboard, "/booking-management/[slug]"),
            edit: path(dashboard, "/booking-management/[slug]/edit"),
            add: path(dashboard, "/booking-management/add"),
        },
        orders: {
            root: path(dashboard, "/orders-grid"),
            list: path(dashboard, "/orders-management"),
            add: path(dashboard, "/orders-management/create"),
        },
        transactions: {
            root: path(dashboard, "/transactions"),
            details: path(dashboard, "/transactions/[slug]"),
        },
        reviews: {
            root: path(dashboard, "/review"),
            list: path(dashboard, "/reviews"),
            details: path(dashboard, "/reviews/[slug]"),
        },
        users: {
            root: path(dashboard, "/users"),
            permission: path(dashboard, "/users/permission"),
            access_management: path(dashboard, "/users/access-management"),
        },
        account_setting: path(dashboard, "/setting"),
        settings: {
            root: path(dashboard, "/setting"),
            profile: path(dashboard, "/setting/profile"),
            theme: path(dashboard, "/setting/theme-management"),
            account: path(dashboard, "/setting/account"),
            notification: path(dashboard, "/setting/notification"),
            history_access: path(dashboard, "/setting/history-access"),
        },
        theme: path(dashboard, "/theme-management"),
        profile: path(dashboard, "/profile"),
    },
};
