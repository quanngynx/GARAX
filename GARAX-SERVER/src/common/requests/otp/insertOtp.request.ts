import { OtpCode } from "@/common/interfaces";

export interface InsertOtpRequest
extends Pick<OtpCode,
| 'otp'
| 'email'
> {}
