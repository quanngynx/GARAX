"use strict";

require('dotenv').config();

const crypto = require('node:crypto');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

// depenc...
const { Account } = require('../models');
const { OtpCode } = require('../models')

const {
  BadRequestError,
  ForbidenError,
  AuthFailureError,
} = require('../middlewares/error.response');

const AccountService = require('./account.service')
// const PartnerService = require('./partner.service')
const KeyTokenService = require('./keyToken.service');
const OtpService = require('./otp.service')

const { transporter } = require('../provider/nodemailer')
const { getInfoData } = require('../utils/');
const {
  createTokenPair,
  getAccessToken,
  getUserProfile,
  sendOtpByNodemailer,
} = require('./auth/utils');

const { ROLES } = require('../constants');

class AuthJWTService {
  static register = async ({ name, email, password, roles = "admin" }) => {
    try {
      const modelUser = await Account.findOne({ where: { email: email } });

      if (modelUser) {
        throw new BadRequestError('Error: Account already registered!');
      }

      // // const otp = crypto.randomInt(100000, 999999).toString();

      // const otp = otpGenerator.generate(6, {
      //   digits: true,
      //   lowerCaseAlphabets: false,
      //   upperCaseAlphabets: false,
      //   specialChars: false
      // });

      // sendOtpByNodemailer({
      //   toEmail: email,
      //   title: 'Mã OTP xác nhận đăng ký',
      //   otp: otp
      // })

      // region Detach func into verify otp
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = await Account.create({
        userName: name,
        email: email,
        password: passwordHash,
        roles: ROLES.ADMIN,
      });

      if (newUser) {
        // console.log(newUser);

        // deleteMany OTP in model
        await OtpCode.destroy({ email: email })

        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 2048,
          publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
          privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
        });

        console.log("generateKeyPairSync success!::", { privateKey, publicKey });
        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newUser.id,
          publicKey,
          privateKey,
        });
        if (!publicKeyString) {
          return {
            code: 500,
            message: 'publicKeyString error!:: ' + error,
          };
        }
        console.log(`publicKeyString::`, publicKeyString);
        const publicKeyObject = crypto.createPublicKey(publicKeyString);
        console.log(`publicKeyObject::`, publicKeyObject);
        const tokens = await createTokenPair(
          { userId: newUser.id, email },
          publicKeyObject,
          privateKey
        );
        console.log(`created tokens success!::`, tokens);
        return {
          code: 201,
          metadata: {
            user: getInfoData({
              fields: ['id', 'name', 'email'],
              object: newUser,
            }),
            tokens,
          },
        };
      }
      return {
        code: 200,
        metadata: null,
      };
    } catch (error) {
      return {
        code: 'xxx',
        message: error,
        status: "Khong xac dinh",
      };
    }
  };

  static login = async ({ email, password, refreshToken = null }) => {
    const foundUser = await AccountService.findByEmail({ email });
    if (!foundUser) throw new BadRequestError('User not registered!');

    const match = bcrypt.compare(password, foundUser.password);
    if (!match) throw new AuthFailureError('Authentication error!');

    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
    });

    const { id: userId, roles } = foundUser;
    const tokens = await createTokenPair(
      { userId: userId, email },
      publicKey,
      privateKey
    );

    await KeyTokenService.createKeyToken({
      refreshToken: tokens.refreshToken,
      userId: userId,
      privateKey,
      publicKey,
    });

    return {
      user: getInfoData({
        fields: ['_id', 'name', 'email', 'roles'],
        object: foundUser,
      }),
      tokens,
    };
  };

  static logout = async (keyStore) => {
    const delKey = await KeyTokenService.removeKeyById(keyStore.id);
    console.log({ delKey });
    return delKey;
  };

  static verifyOtp = async ({ email, otp }) => {
    try {
      const otpHolder = await OtpCode.findAll({
        where: {
          email: email
        }
      })
      const lastOtp = otpHolder[otpHolder.length - 1]

      const isValid = await OtpService.validateOtp({
        otp: otp,
        hashOtp: lastOtp
      })

      return {
        isValid,
        lastOtp
      }
      // if(!isValid) throw new AuthFailureError('OTP is valid!')

      // if (isValid && email === lastOtp.email) {
      //   // create user

      //   // deleteMany OTP in model
      // }

    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = AuthJWTService;
