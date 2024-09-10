'use strict'

const mongoose = require("mongoose");

const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Numbers of connection::${numConnection}`)
}

module.exports = {
  countConnect
}
