'use strict'

require("dotenv").config();
const mongoose = require("mongoose");
const { countConnect } = require('../helpers/check.connect')
const { db: { host, name, port } } = require('../configs/config.mongodb')

const connectString = `mongodb://${host}:${port}/${name}`

class Database {
  constructor() {
      this.connect();
  }

  // connect
  connect(type = 'mongodb') {
      if(1 === 0){
          mongoose.set('debug', true)
          mongoose.set('debug', { color: true })
      }

      mongoose
          .connect(connectString, { maxPoolSize: 50 })
          .then(() => {
              console.log("Connected to MongoDB!", countConnect());
          })
          .catch((e) => {
              console.error("Did not connect to MongoDB", e);
          });
  }

  static getInstance() {
      if(!Database.instance){
          Database.instance = new Database()
      }
      return Database.instance
  }
}

const instanceMongoDB = Database.getInstance()
module.exports = instanceMongoDB;
