const db = require('../db/init.mysql');
require('dotenv').config();
const User = {
    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM account WHERE Username = ?';
        db.query(query, [username], (err, results) => {
            if (err) return callback(err);
            return callback(null, results[0]);
        });
    },

    create: (username, hashedPassword, callback) => {
        const query = 'INSERT INTO account (Username, password) VALUES (?, ?)';
        db.query(query, [username, hashedPassword], (err, results) => {
            if (err) return callback(err);
            return callback(null, results.insertId);
        });
    }
};

module.exports = User;