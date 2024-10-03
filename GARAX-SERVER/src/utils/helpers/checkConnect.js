'use strict'

const mongoose = require("mongoose");
const os = require('os')
const process = require('process')
const _SECONDS = 5000

const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Numbers of connection::${numConnection}`)
}

//Check overload in 5 sec
const checkOverLoad = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        //Example maximum number of connections based on number of  cores
        const maxConnections = numCores * 5

        console.log(`mEMORY USAGE::${memoryUsage / 1024 / 1024}MB`)

        if(numConnection > maxConnections) {
            console.log(`Connection overload is detected!`)
        }
    }, _SECONDS) // monitor every 5 sec
}

module.exports = {
    countConnect,
    checkOverLoad
}
