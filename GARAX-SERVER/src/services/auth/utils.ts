'use strict';
import JWT, { JwtPayload } from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { NextFunction, Request, Response } from 'express';

import KeyTokenService from '../../services/keyToken.service';

import { asyncHandler } from '../../middlewares';
import { AuthFailureError, NotFoundError } from '../../middlewares/error.response';

import { HEADER } from '@/common/constants';
import { KeyStore } from '@/common/interfaces';

interface SendOtpByNodemailerProps {
  title: string;
  otp: string;
  toEmail: string;
}

interface AuthenticationProps extends Request {
  keyStore: KeyStore;
  user: any;
  refreshToken: string | string[];
}

const createTokenPair = async (
  payLoad: string | Buffer | object,
  publicKey: string | Buffer<ArrayBufferLike>,
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

const authentication = asyncHandler(async(req: AuthenticationProps, _res: Response, next: NextFunction) => {
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

  const keyStore: KeyStore = await KeyTokenService.findByUserId(userId);
  if (!keyStore) throw new NotFoundError('Not found keyStore! - 57');

  if (req.headers[HEADER.REFRESHTOKEN]) {
    try {
      const refreshToken = req.headers[HEADER.REFRESHTOKEN];
      const getRefreshToken = Array.isArray(refreshToken) ? refreshToken[0] : refreshToken;
      const decodeUser = JWT.verify(getRefreshToken, keyStore.privateKey) as JwtPayload;

      if (userId !== decodeUser.userId) throw new AuthFailureError('Invalid userId!');

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
    const decodeUser = JWT.verify(accessToken, keyStore.publicKey) as JwtPayload;

    if (userId !== decodeUser.userId)
      throw new AuthFailureError('Invalid userId! - 83');

    req.keyStore = keyStore;
    req.user = decodeUser;

    return next();
  } catch (error) {
    throw error;
  }
});

const verifyJWT = async (token: string, keySecret: string) => {
  return JWT.verify(token, keySecret);
};

const sendOtpByNodemailer = async ({ title, otp, toEmail }: SendOtpByNodemailerProps) => {
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

export {
  createTokenPair,
  authentication,
  verifyJWT,
  sendOtpByNodemailer
};
