import { PrimaryKey } from '../primaryKey.interface';

export interface OtpCode extends PrimaryKey {
  otp: string;
  email: string;
  expiresAt: Date;
}
