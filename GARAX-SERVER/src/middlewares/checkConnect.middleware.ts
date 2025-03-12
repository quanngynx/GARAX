'use strict'

import { cpus } from 'os';
import { memoryUsage as _memoryUsage } from 'process';
import connection from '@/db/init.mysql';
import QueryTypes from 'sequelize/lib/query-types';

const _SECONDS = 5000

const getActiveConnections = async (): Promise<number> => {
  try {
    const result = await connection.query<{ Value: string }>(
      'SHOW STATUS WHERE `Variable_name` = "Threads_connected"',
      { type: QueryTypes.SELECT }
    );

    return result.length > 0 ? parseInt(result[0].Value, 10) : 0;
  } catch (error) {
    console.error('Error fetching active connections:', error);
    return 0;
  }
};

const countConnect = async () => {
  const numConnection = await getActiveConnections();
  console.log(`Numbers of connection::${numConnection}`);
}

//Check overload in 5 sec
const checkOverLoad = () => {
  setInterval( async () => {
      const numConnection: number = await getActiveConnections();
      const numCores = cpus().length;
      const memoryUsage = _memoryUsage().rss;

      const maxConnections = numCores * 5;

      console.log(`mEMORY USAGE::${memoryUsage / 1024 / 1024}MB`);

      if(numConnection > maxConnections) {
          console.log(`Connection overload is detected!`);
      }
  }, _SECONDS);
};

export default {
  countConnect, checkOverLoad
}
