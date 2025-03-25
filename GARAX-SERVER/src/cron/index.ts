import cron from 'node-cron';
import { destroyOtp } from './task/destroyOtp';
const timezone = 'Asia/Ho_Chi_Minh';

cron.schedule('* * * * *', destroyOtp, {
  scheduled: true,
  timezone: timezone
});
