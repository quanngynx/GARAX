const { result } = require('lodash');
const db = require('../db/init.mysql');
require('dotenv').config();

const User = {
    deleteOTP: async(email)=>{
        const deleteotp ='UPDATE account set otp= NULL where email = ?'
        return new Promise((resolve,reject)=>{
            db.query(deleteotp,email,(err,results)=>{
                if(err) return reject(err);
                return resolve(results);
             })
         }
        )
    },
    findAllUsers: async () => {
        const query = `
             SELECT account.IDAcc, account.Email, account.Password, customerdetails.Fullname, customerdetails.Phone
            FROM account
            JOIN customerdetails ON customerdetails.IDAcc = account.IDAcc`;
        try {
            const [results] = await db.promise().query(query);
            return results;  // Trả về tất cả thông tin user
        } catch (err) {
            throw new Error(`Failed to retrieve users: ${err.message}`);
        }
    },

    findCusdetails: async (email) => {
        const query = `
            SELECT account.*, customerdetails.Fullname
            FROM account
            JOIN customerdetails ON customerdetails.IDAcc = account.IDAcc
            WHERE account.Email = ?`;

        try {
            const [results] = await db.promise().query(query, [email]);
            return results[0];  // Trả về thông tin user đầu tiên
        } catch (err) {
            throw new Error(`Failed to find customer details: ${err.message}`);
        }
    },
    updateStatus: async(email)=>{
        const query = `UPDATE account SET verified  = 1 WHERE email = ?`;
        return new Promise((resolve,reject)=>{
            db.query(query,[email],(err,result)=>
            {
                if(err) return reject(err);
                return resolve(result);
            }
            )
        }
    )
    },
    createCustomerDetails: async (IDAcc, fullname, phone) => {
        const customerDetailsQuery = `INSERT INTO customerdetails (IDAcc, Fullname, Phone) VALUES (?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.query(customerDetailsQuery, [IDAcc, fullname, phone], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    findByEmail: async (email) => {
        const query = 'SELECT * FROM account WHERE Email = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]); 
            });
        });
    },
    // Chuyển thành async function trả về Promise
    createAccount: async (email, hashedPassword, otp, otpTime, verified) => {
        const accountQuery = `INSERT INTO account (Email, Password, otp, otpTime, verified) VALUES (?, ?, ?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.query(accountQuery, [email, hashedPassword, otp, otpTime, verified], (err, result) => {
                if (err) return reject(err);
                resolve(result.insertId); // Lấy IDAcc vừa tạo
            });
        });
      
    }
};

module.exports = User;
