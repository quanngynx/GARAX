"use strict";

import bcrypt from 'bcrypt';
import otpGenerator from 'otp-generator';

import { db } from '../models';

import { sendOtpByNodemailer } from './auth/utils';
import { InsertOtpRequest, ValidateOtpRequest } from '@/common/requests/otp';

export class OtpService {
  static async validateOtp({
    otp,
    hashOtp
  } : ValidateOtpRequest) {
    try {
      const isValid = await bcrypt.compare(otp, hashOtp)
      return isValid
    } catch (error) {
      console.error(error)
    }
  }
  static async insertOtp({
    otp,
    email
  } : InsertOtpRequest) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashOtp = await bcrypt.hash(otp, salt)
      const isCreateOtp = await db.OtpCode.create({
        otp: hashOtp,
        email,
      })
      return isCreateOtp ? true : false
    } catch (error) {
      console.error(error)
    }
  }
  static async genOtpAndSendByNodemailer(email: string) {
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
