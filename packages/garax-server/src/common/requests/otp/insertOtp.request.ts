import { OtpCode } from '@/common/interfaces';

export type InsertOtpRequest = Pick<OtpCode, 'otp' | 'email'>;
