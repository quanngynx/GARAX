import { OtpCode } from '@/common/interfaces';

export type VerifyOtpRequest = Pick<OtpCode, 'email' | 'otp'>;
