export const BASE_URL_CLIENT = process.env.VITE_URL_CLIENT || '';
export const BASE_URL_ADMIN = process.env.NEXT_URL_ADMIN || '';

export const USERS = {
  // GENDER: {
  //   MALE: 'male',
  //   FEMALE: 'female',
  //   OTHER: 'other',
  // },
  AVATAR: {
    DEFAULT_VALUE: 'https://drive.google.com/thumbnail?id=1bE9KJ_Mtw5hgCXGSbp4QUKkF7H5-bSMM&sz=w250'
  },
  ROLE: {
    ADMIN: 'admin',
    STAFF: 'staff',
    CUSTOMER: 'customer',
  },
  STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
  },
};
// export const ADDRESS = {
//   HOME: 'home',
//   OFFICE: 'office'
// };

export type GENDER = "male" | "female" | "other";
export const GENDER_VALUES = ["male", "female", "other"] as const;

export type ADDRESS = 'home' | 'office';
export const ADDRESS_VALUES = ['home', 'office'] as const;

export type IMAGE = 'small' | 'medium' | 'large';
export const IMAGE_VALUES = ['small', 'medium', 'large'] as const;
