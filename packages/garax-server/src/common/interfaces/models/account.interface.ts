import { GENDER } from '../../constants';
import { PrimaryKey } from '../primaryKey.interface';

export interface Account extends PrimaryKey {
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
  roleId: number;
  // keyTokenId: string;
  createdAt: Date;
  updatedAt: Date;
}
