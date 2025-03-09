"use strict";
import { CreateKeyTokenRequest } from "@/common/requests";
import { db } from '../models';
import { KeyStore } from "@/common/interfaces";
import { JsonWebKeyInput, KeyObject, PublicKeyInput } from "crypto";

export class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken
  }: CreateKeyTokenRequest): Promise<Promise<string | Buffer<ArrayBufferLike> | KeyObject | JsonWebKeyInput | PublicKeyInput>> => {
    try {
      console.log("createKeyToken::", { userId, publicKey, privateKey, refreshToken })
      const filter = { userId: userId },
            update = { publicKey, privateKey, refreshTokenUsed: JSON }

      const existingRecord = await db.KeyToken.findOne({ where: filter });

      let tokens;
      if (existingRecord) {
        tokens = await existingRecord.update(update);
      } else {
        tokens = await db.KeyToken.create({
          ...filter,
          ...update,
          created_at: undefined,
          updated_at: undefined
        });
        console.log("tokens::", tokens)
      }
      return tokens ? tokens.publicKey : '';
    } catch (error) {
      return error
    }
  }

  static findByUserId = async (_userId: string | string[]): Promise<KeyStore> => {
    // return await keyTokenModel.findOne({ user: new Types.ObjectId(userId) })
    return { privateKey: '', publicKey: '' }
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
