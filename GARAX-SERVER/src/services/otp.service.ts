"use strict";

const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')

const { OtpCode } = require('../models')

const {
  sendOtpByNodemailer,
} = require('./auth/utils');

class otpService {
  static async validateOtp({ otp, hashOtp}) {
    try {
      const isValid = await bcrypt.compare(otp, hashOtp)
      return isValid
    } catch (error) {
      console.error(error)
    }
  }
  static async insertOtp({ otp, email }) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashOtp = await bcrypt.hash(otp, salt)
      const isCreateOtp = await OtpCode.create({
        email,
        otp: hashOtp
      })
      return isCreateOtp ? true : false
    } catch (error) {
      console.error(error)
    }
  }
  static async genOtpAndSendByNodemailer(email) {
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });

    sendOtpByNodemailer({
      toEmail: email,
      title: 'Mã OTP xác nhận đăng ký',
      otp: otp
    })
  }
}

module.exports = otpService
