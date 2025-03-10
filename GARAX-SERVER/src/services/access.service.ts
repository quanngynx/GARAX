"use strict";

import { HandleRefreshTokenRequest } from "@/common/requests/access";
import { KeyTokenService } from "./keyToken.service";
import { AuthFailureError, ForbidenError } from "@/middlewares/error.response";
import { findByEmail } from "@/common/repositories";
import { createTokenPair } from "./auth/utils";
import { Sequelize } from "sequelize";

export class AccessService {
  static async handleRefreshToken({
    keyStore,
    user,
    refreshToken
  } : HandleRefreshTokenRequest) {
    const { userId, email } = user;

    const convertToArray = JSON.parse(JSON.stringify(keyStore.refreshTokenUsed));
    if(convertToArray.includes(refreshToken)) {
      await KeyTokenService.deleteKeyById(userId);
      throw new ForbidenError('Something wrong happened, please relogin!');
    }

    if(keyStore.refreshToken !== refreshToken) {
      throw new AuthFailureError('You is not registered!')
    }

    const isFoundUser = await findByEmail({
      email
    })
    if(!isFoundUser)
      throw new AuthFailureError('User is not registered!');

    const tokens = await createTokenPair(
      {
        userId: userId,
        email
      },
      keyStore.publicKey,
      keyStore.privateKey
    );

    await keyStore.update(
      {
        refreshToken: tokens?.refreshToken,
        refreshTokenUsed: Sequelize.fn(
          'array_append',
          Sequelize.col('refreshTokensUsed'),
          refreshToken
        ),
      },
      {
        where: { id: keyStore.id },
      }
    );

    return { user, tokens }
  }
}
