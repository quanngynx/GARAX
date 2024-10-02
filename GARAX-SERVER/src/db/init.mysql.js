const express = require('express');
const mysql = require('mysql');

const app = express();

// const configdb = require('../config/config.mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'garrax'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM customer', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(rows);
    }
  });
  db.query('SELECT * FROM account', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(rows);
    }
  });
  db.query('SELECT * FROM customerdetails', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(rows);
    }
  });
});

app.listen(5176, () => {
  console.log(`Server listening on port ${port}`);
});
