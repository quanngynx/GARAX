import { GENDER } from "../../constants";

export interface Account {
  id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  gender: GENDER;
  dob: number;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  emptyPassword: boolean;
  googleId: string;
  pointerId: string;
  roleId: string;
  created_at?: Date;
  updated_at?: Date;
}
