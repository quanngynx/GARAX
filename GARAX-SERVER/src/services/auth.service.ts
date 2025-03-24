"use strict";
require('dotenv').config();
import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
// import nodemailer from 'nodemailer';
// import otpGenerator from 'otp-generator';

// depenc...
import { db } from '../models';
import { BadRequestError, AuthFailureError, InternalServerError } from '../middlewares/error.response';
import { AccountService } from './account.service';
// const PartnerService = require('./partner.service')
import { KeyTokenService } from './keyToken.service';
import { OtpService } from './otp.service';
// import { transporter } from '../provider/nodemailer';
import { getInfoData } from '@/common/utils';
import {
  createTokenPair,
  // getAccessToken,
  // getUserProfile,
  // sendOtpByNodemailer
} from './auth/utils';

import { GENDER_VALUES } from '@/common/constants';
import { KeyStoreRequest, LoginRequest, RegisterRequest, VerifyOtpRequest } from '@/common/requests/auth';
import { error } from 'node:console';

export class AuthJWTService {
  static register = async ({
    userName,
    email,
    password,
    roleId = 1
  }: RegisterRequest) => {
    try {
      const modelUser = await db.Account.findOne({ where: { email: email } });

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

      const newUser = await db.Account.create({
        userName: userName,
        firstName: '',
        lastName: '',
        gender: GENDER_VALUES[0],
        dob: 12,
        email: email,
        phone: '1234567890',
        avatar: '',
        password: passwordHash,
        emptyPassword: false,
        googleId: '',
        pointerId: '',
        roleId: roleId,
      });

      if (newUser) {
        // console.log(newUser);
        await db.OtpCode.destroy({
          where: {
            email: email
          }
        });

        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 2048,
          publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
          privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
        });
        // console.log("generateKeyPairSync success!::", { privateKey, publicKey });

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
        // console.log(`publicKeyString::`, publicKeyString);

        const publicKeyObject = crypto.createPublicKey(publicKeyString);
        // console.log(`publicKeyObject::`, publicKeyObject);
        const publicKeyToString = publicKeyObject.export({ type: 'spki', format: 'pem' });

        const tokens = await createTokenPair(
          { userId: newUser.id, email },
          publicKeyToString,
          privateKey
        );
        // console.log(`created tokens success!::`, tokens);
        return {
          code: 201,
          metadata: {
            user: getInfoData({
              fields: ['id', 'userName', 'email'],
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
        code: '500',
        message: error,
        status: "Khong xac dinh",
      };
    }
  };

  static login = async ({
    email,
    password,
    // refreshToken = ''
  }: LoginRequest) => {
    const selectedColumns: string | string[] = [
      'email',
      'password',
      'userName',
      'phone',
      'roleId'
    ];
    const foundUser = await AccountService.findByEmail({
      email,
      select: selectedColumns.length ? selectedColumns : ['id'],
    });
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

    const {
      id: userId,
      // roleId
    } = foundUser;
    const isUserId = (userId !== undefined) ? userId : 0;
    const tokens = await createTokenPair(
      {
        userId: isUserId,
        email
      },
      publicKey,
      privateKey
    );

    await KeyTokenService.createKeyToken({
      refreshToken: tokens!.refreshToken,
      userId: isUserId,
      privateKey,
      publicKey,
    });

    return {
      user: getInfoData({
        fields: ['id', 'userName', 'email', 'roleId'],
        object: foundUser,
      }),
      tokens,
    };
  };

  static logout = async (keyStore: KeyStoreRequest) => {
    const delKey = await KeyTokenService.removeKeyById(keyStore.id);
    console.log({ delKey });
    return delKey;
  };

  static verifyOtp = async ({
    email,
    otp
  } : VerifyOtpRequest) => {
    try {
      const otpHolder = await db.OtpCode.findAll({
        where: {
          email: email
        }
      })
      const lastOtp = otpHolder[otpHolder.length - 1]

      const isValid = await OtpService.validateOtp({
        otp: otp,
        hashOtp: lastOtp.otp
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
      throw new InternalServerError(`error::${error}`);
    }
  }
}
