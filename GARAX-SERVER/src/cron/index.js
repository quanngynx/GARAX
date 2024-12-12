const cron = require('node-cron');
const { destroyOtp } = require('./task/destroyOtp');
const timezone = 'Asia/Ho_Chi_Minh';

cron.schedule('* * * * *', destroyOtp, {
  scheduled: true,
  timezone: timezone
});

