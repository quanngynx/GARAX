const db = require('../db/init.mysql');
require('dotenv').config();

const User = {

    findByEmail: async (email) => {
        const query = 'SELECT * FROM account WHERE Email = ?';
        return new Promise((resolve, reject) => {
          
            db.query(query, [email], (err, results) => {
                console.log("Query results:", results);
                if (err) return reject(err);
                resolve(results[0]); 
            });
        });
    },

    // Chuyển thành async function trả về Promise
    create: async (email, hashedPassword, fullname, phone) => {
        const query1 = 'INSERT INTO account (Email, password) VALUES (?, ?)';
        const query2 = 'INSERT INTO customerDetails (Fullname, Phone) VALUES (?, ?)';

        try {
            // Chèn vào bảng account trước
            const resultAccount = await new Promise((resolve, reject) => {
                db.query(query1, [email, hashedPassword], (err, results) => {
                    if (err) return reject(err);
                    resolve(results.insertId); // Lấy ID từ bảng account
                });
            });

            // Chèn vào bảng customerDetails với ID từ account
            const resultCustomerDetails = await new Promise((resolve, reject) => {
                db.query(query2, [fullname, phone], (err, results) => {
                    if (err) return reject(err);
                    resolve(results.insertId); // Lấy ID từ bảng customerDetails
                });
            });

            // Trả về kết quả của cả hai bảng
            return {
                accountId: resultAccount,
                customerDetailsId: resultCustomerDetails
            };

        } catch (err) {
            throw new Error('Error creating user: ' + err.message);
        }
    }
};

module.exports = User;
