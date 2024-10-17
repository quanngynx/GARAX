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
    // generateOTP :() => {
    //     return Math.floor(100000 + Math.random() * 900000).toString();  // OTP 6 chữ số
    // },
    //  sendOTPEmail: async (email, otp) => {
    //     const mailOptions = {
    //         from: process.env.EMAIL_USER,  // Địa chỉ email của bạn
    //         to: email,  // Email của người dùng
    //         subject: 'Xác nhận OTP',  // Tiêu đề email
    //         text: `Mã OTP của bạn là ${otp}`  // Nội dung email chứa OTP
    //     };
    
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             console.log('Lỗi khi gửi OTP: ', error);
    //         } else {
    //             console.log('OTP đã được gửi: ' + info.response);
    //         }
    //     });
    // },

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
    create: async (email, hashedPassword, fullname, phone,otp, otpTime,verified) => {
        const query1 = 'INSERT INTO account (Email, password, otp, otpTime, verified) VALUES (?, ?, ?, ?, ?)';
        const query2 = 'INSERT INTO customerDetails (Fullname, Phone) VALUES (?, ?)';
        try {
            const resultAccount = await new Promise((resolve, reject) => {
                db.query(query1, [email, hashedPassword, otp, otpTime, verified], (err, results) => {
                    if (err) return reject(err);
                    resolve(results.insertId); 
                });
            });
          
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
