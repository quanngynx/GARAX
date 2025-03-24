import RateLimit from 'express-rate-limit';

/** Chỉ áp dụng cho routes user, nếu bạn muốn.
 * @example
 * app.use('/user/', apiLimiter);
 */
export const apiLimiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
