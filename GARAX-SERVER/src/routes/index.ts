import express from 'express'
export const router = express.Router()
// import database from '../db/init.mysql.level0'
import { routerV1 } from './v1/index';

//check apikey

//check permissions

// main route
// router.get('/api/data', (req, res) => {
//   database.query('SELECT * FROM customer', (err, rows) => {
//     if (err) {
//       console.error('error running query:', err);
//       res.status(500).send({ message: 'Error fetching data' });
//     } else {
//       res.status(200).send(rows);
//     }
//   });

//   database.query('SELECT * FROM account', (err, rows) => {
//     if (err) {
//       console.error('error running query:', err);
//       res.status(500).send({ message: 'Error fetching data' });
//     } else {
//       res.status(200).send(rows);
//     }
//   });
//   database.query('SELECT * FROM customerdetails', (err, rows) => {
//     if (err) {
//       console.error('error running query:', err);
//       res.status(500).send({ message: 'Error fetching data' });
//     } else {
//       res.status(200).send(rows);
//     }
//   });
// });

router.use('/v1', routerV1)

