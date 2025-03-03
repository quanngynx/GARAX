'use strict';
import JWT from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { NextFunction, Request, Response } from 'express';

import KeyTokenService from '../../services/keyToken.service';

import asyncHandler from '../../middlewares/asyncHandler.middleware';
import { AuthFailureError, NotFoundError } from '../../middlewares/error.response';

import { HEADER } from '@/common/constants';

const createTokenPair = async (
  payLoad: string | Buffer | object,
  publicKey: string,
  privateKey: string
) => {
  try {
    const accessToken = JWT.sign(payLoad, privateKey, {
      algorithm: 'RS256',
      expiresIn: '10 hours',
    });

    const refreshToken = JWT.sign(payLoad, privateKey, {
      algorithm: 'RS256',
      expiresIn: '3 days',
    });

    JWT.verify(accessToken, publicKey, (err: any, decode: any) => {
      if (err) {
        console.error(`error verify::`, err);
      } else {
        console.log(`decode verify::`, decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {}
};

const authentication = asyncHandler(async(req: Request, _res: Response, next: NextFunction) => {
  /**
   * @author Quan
   * 1 - Check userId missing??
   * 2 - get accessToken
   * 3 - verifyToken
   * 4 - check user in db
   * 5 - check keyStore with this userId
   * 6 - OK all?? return next
   */

  const userId = req.headers[HEADER.CLIENT_ID];
  if (!userId) throw new AuthFailureError('Invalid Request! - 53');

  const keyStore = await KeyTokenService.findByUserId(userId);
  if (!keyStore) throw new NotFoundError('Not found keyStore! - 57');

  if (req.headers[HEADER.REFRESHTOKEN]) {
    try {
      const refreshToken = req.headers[HEADER.REFRESHTOKEN];
      const decodeUser = JWT.verify(refreshToken, keyStore.privateKey);

      if (userId !== decodeUser.userId)
        throw new AuthFailureError('Invalid userId! - 65');

      req.keyStore = keyStore;
      req.user = decodeUser;
      req.refreshToken = refreshToken;

      return next();
    } catch (error) {
      throw error;
    }
  }
  const accessToken = req.headers[HEADER.AUTHORIZATION];
  if (!accessToken) throw new AuthFailureError('Invalid Request! - 78');

  try {
    const decodeUser = JWT.verify(accessToken, keyStore.publicKey);

    if (userId !== decodeUser.userId)
      throw new AuthFailureError('Invalid userId! - 83');

    req.keyStore = keyStore;
    req.user = decodeUser;

    return next();
  } catch (error) {
    throw error;
  }
});

const verifyJWT = async (token: any, keySecret: any) => {
  return await JWT.verify(token, keySecret);
};

const sendOtpByNodemailer = async ({ title, otp, toEmail }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_MAIL_USERNAME,
        pass: process.env.NODEMAILER_MAIL_PASSWORD
      }
    });
    const options = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: title,
      text: `Mã OTP của bạn là: ${otp}`,
    }
    transporter.sendMail(
      options,
      (error: any, info: { response: string; }) =>
        error ? console.log(error) : console.log('Email sent: ' + info.response)
    )
  } catch (error) {
    console.error(error)
    return error
  }
}

module.exports = {
  createTokenPair,
  authentication,
  verifyJWT,
  sendOtpByNodemailer
};
