export interface OtpCode {
  id: string;
  otp: string;
  email: string;
  expiresAt: Date;
}
