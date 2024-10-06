const RateLimit = require('express-rate-limit');

/** Chỉ áp dụng cho routes user, nếu bạn muốn.
 * @example
 * app.use('/user/', apiLimiter);
 */
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});

module.exports = {
  apiLimiter
}



