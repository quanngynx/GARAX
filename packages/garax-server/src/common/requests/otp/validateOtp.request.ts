import { OtpCode } from '@/common/interfaces';

export interface ValidateOtpRequest extends Pick<OtpCode, 'otp'> {
  hashOtp: string;
}
