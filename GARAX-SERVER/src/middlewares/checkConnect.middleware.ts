'use strict'

import { connections } from "mongoose";
import { cpus } from 'os';
import { memoryUsage as _memoryUsage } from 'process';
const _SECONDS = 5000

const countConnect = () => {
    const numConnection = connections.length
    console.log(`Numbers of connection::${numConnection}`)
}

//Check overload in 5 sec
const checkOverLoad = () => {
  setInterval( () => {
      const numConnection = connections.length
      const numCores = cpus().length
      const memoryUsage = _memoryUsage().rss
      //Example maximum number of connections based on number of  cores
      const maxConnections = numCores * 5

      console.log(`mEMORY USAGE::${memoryUsage / 1024 / 1024}MB`)

      if(numConnection > maxConnections) {
          console.log(`Connection overload is detected!`)
      }
  }, _SECONDS) // monitor every 5 sec
}

export default {
  countConnect, checkOverLoad
}
