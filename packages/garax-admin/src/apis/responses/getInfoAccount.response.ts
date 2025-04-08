import { GENDER } from "../types";

export interface GetInfoAccountResponse {
    message: string;
    status: number;
    metadata: {
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
    };
}