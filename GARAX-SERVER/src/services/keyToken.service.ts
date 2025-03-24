'use strict';
import { CreateKeyTokenRequest } from '@/common/requests';
import { db } from '../models';
import { JsonWebKeyInput, KeyObject, PublicKeyInput } from 'crypto';

export class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey
    // refreshToken
  }: CreateKeyTokenRequest): Promise<
    Promise<string | Buffer<ArrayBufferLike> | KeyObject | JsonWebKeyInput | PublicKeyInput>
  > => {
    try {
      // console.log("createKeyToken::", { userId, publicKey, privateKey, refreshToken })
      const filter = { userId: userId },
        update = { publicKey, privateKey, refreshTokenUsed: JSON };

      const existingRecord = await db.KeyToken.findOne({ where: filter });

      let tokens;
      if (existingRecord) {
        tokens = await existingRecord.update(update);
      } else {
        tokens = await db.KeyToken.create({
          ...filter,
          ...update
        });
        // console.log("tokens::", tokens)
      }
      return tokens ? tokens.publicKey : '';
    } catch (error) {
      return '' + error;
    }
  };

  static findByUserId = async (userId: number | number[]) => {
    return await db.KeyToken.findOne({
      where: {
        userId: userId
      }
    });
  };

  static removeKeyById = async (id: number) => {
    return await db.KeyToken.destroy({
      where: {
        id
      }
    });
  };

  static findByRefreshTokenUsed = async (refreshToken: string) => {
    return await db.KeyToken.findOne({
      where: {
        refreshTokenUsed: refreshToken
      },
      raw: true
    });
  };

  static findByRefreshToken = async (refreshToken: string) => {
    return await db.KeyToken.findOne({
      where: {
        refreshToken
      }
    });
  };

  static deleteKeyById = async (userId: number) => {
    return await db.KeyToken.destroy({
      where: {
        userId: userId
      }
    });
  };
}
