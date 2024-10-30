const express = require('express')
const router = express.Router()
const database = require('../db/init.mysql.level0')

//check apikey

//check permissions

// main route
router.get('/api/data', (req, res) => {
  database.query('SELECT * FROM customer', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.status(200).send(rows);
    }
  });

  database.query('SELECT * FROM account', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.status(200).send(rows);
    }
  });
  database.query('SELECT * FROM customerdetails', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.status(200).send(rows);
    }
  });
});

router.use('/api', require('./v1/index'))
// router.use('/api', require('./v2/index'))

module.exports = router
