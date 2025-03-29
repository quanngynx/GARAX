import RateLimit from 'express-rate-limit';

/** Chỉ áp dụng cho routes user, nếu bạn muốn.
 * @example
 * app.use('/user/', apiLimiter);
 */
export const apiLimiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

export const loginLimiter = RateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // max -> 10th/5min
  message: 'Bạn đang submit nhiều lần. Vui lòng thử lại sau 5 phút.'
});

export const registerLimiter = RateLimit({
  windowMs: 60 * 60 * 1000, // 1 hours
  max: 5, // max -> 5th/hour
  message: 'Bạn đang submit nhiều lần. Hãy thử lại sau một giờ.'
});

export const paymentLimiter = RateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // max -> 5th/10min
  message: 'Bạn đã gửi quá nhiều yêu cầu thanh toán. Hãy thử lại sau.'
});
