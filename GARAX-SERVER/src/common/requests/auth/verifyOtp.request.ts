import { OtpCode } from "@/common/interfaces";

export interface VerifyOtpRequest
extends Pick<OtpCode,
| 'email'
| 'otp'
>{}
