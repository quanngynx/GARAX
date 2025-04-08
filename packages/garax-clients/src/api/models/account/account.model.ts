import { GENDER } from "../../constants";

export interface AccountInfo {
  id: number;
  username: string;
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
  // keyTokenId: string;
  //   avatar: Image;
  //   permissions: Permission[];
}