"use strict";

import { CreateKeyTokenRequest } from "@/common/requests";

import { KeyToken } from '../models';
import { KeyStore } from "@/common/interfaces";

class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken
  }: CreateKeyTokenRequest) => {
    try {
      console.log("createKeyToken::", { userId, publicKey, privateKey, refreshToken })
      const filter = { userId: userId },
        update = { publicKey, privateKey, refreshTokenUsed: {}, refreshToken }

      const existingRecord = await KeyToken.findOne({ where: filter });

      let tokens;
      if (existingRecord) {
        tokens = await existingRecord.update(update);
      } else {
        tokens = await KeyToken.create({ ...filter, ...update });
        console.log("tokens::", tokens)
      }
      return tokens ? tokens.publicKey : null
    } catch (error) {
      return error
    }
  }

  static findByUserId = async (_userId: string | string[]): Promise<KeyStore> => {
    // return await keyTokenModel.findOne({ user: new Types.ObjectId(userId) })
    return { privateKey: '' }
  }
  static removeKeyById = async (_id: string) => {
    // return await keyTokenModel.deleteOne( id )
  }

  static findByRefreshTokenUsed = async ( _refreshToken: string) => {
    // return await keyTokenModel.findOne( { refreshTokensUsed: refreshToken } ).lean()
  }

  static findByRefreshToken = async ( _refreshToken: string) => {
    // return await keyTokenModel.findOne( { refreshToken } )
  }

  static deleteKeyById = async ( _userId: string) => {
    // return await keyTokenModel.deleteOne( { user: new Types.ObjectId(userId) } )
  }
}

export default KeyTokenService
