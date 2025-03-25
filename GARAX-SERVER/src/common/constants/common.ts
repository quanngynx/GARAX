export const BASE_URL_CLIENT = process.env.VITE_URL_CLIENT || '';
export const BASE_URL_ADMIN = process.env.NEXT_URL_ADMIN || '';

export const USERS = {
  GENDER: {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
  },
  AVATAR: {
    DEFAULT_VALUE: 'https://drive.google.com/thumbnail?id=1bE9KJ_Mtw5hgCXGSbp4QUKkF7H5-bSMM&sz=w250'
  },
  ROLE: {
    ADMIN: 'admin',
    STAFF: 'staff',
    CUSTOMER: 'customer'
  },
  STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive'
  }
};
// export const ADDRESS = {
//   HOME: 'home',
//   OFFICE: 'office'
// };

export type GENDER = 'male' | 'female' | 'other';
export const GENDER_VALUES = ['male', 'female', 'other'] as const;

export type ADDRESS = 'home' | 'office';
export const ADDRESS_VALUES = ['home', 'office'] as const;

export type IMAGE = 'small' | 'medium' | 'large';
export const IMAGE_VALUES = ['small', 'medium', 'large'] as const;

export type PAYMENT_METHOD = 'COD' | 'PAYOS' | 'PRESSPAY';
export const PAYMENT_METHOD_VALUES = ['COD', 'PAYOS', 'PRESSPAY'] as const;
// export enum PAYMENT_METHOD {
//   COD = 'COD',
//   PAYOS = 'PAYOS',
//   PRESSPAY = 'PRESSPAY'
// }

export type PAYMENT_STATUS = 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED' | 'REFUNDED' | 'PROCESSING';
export const PAYMENT_STATUS_VALUES = ['PENDING', 'PAID', 'FAILED', 'CANCELLED', 'REFUNDED', 'PROCESSING'] as const;
// export enum PAYMENT_STATUS {
//   PENDING = 'PENDING',
//   PAID = 'PAID',
//   FAILED = 'FAILED',
//   CANCELLED = 'CANCELLED',
//   REFUNDED = 'REFUNDED',
//   PROCESSING = 'PROCESSING'
// }

export type PRODUCT_STATUS = 'publish' | 'draft' | 'all';
export const PRODUCT_STATUS_VALUES = ['publish', 'draft', 'all'] as const;

export type PRODUCT_TAG = 'test' | 'abc' | 'all';
export const PRODUCT_TAG_VALUES = ['test', 'abc', 'all'] as const;
