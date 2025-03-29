import { BaseResponse } from "../bases/response";
import { GENDER } from "../types";

export interface GetInfoAccountMetadata {
  id: number;
  userName: string;
  firstName: string; 
  lastName: string; 
  gender: GENDER; 
  dob: number;
  email: string; 
  phone: string; 
  avatar: string; 
  password: string;
  emptyPassword: string;
  googleId: string; 
  pointerId: string; 
  roleId: string; 
  createdAt: Date; 
  updatedAt: Date; 
}

export type GetInfoAccountResponse =
BaseResponse<GetInfoAccountMetadata>;