const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();

// const configdb = require('../config/config.mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'garrax'
});

db.connect((err) => {
  if (err) {
      console.error('Error connecting to the database:', err);
      return;
  }
  console.log('Connected to MySQL database');
});
app.get('/auth/register', (req, res) => {
  res.send('Trang đăng ký - Node.js Backend');
});
module.exports = db;
