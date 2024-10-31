'use strict'

const JWT = require('jsonwebtoken')

const asyncHandler  = require('../../middlewares/asyncHandler.middeware')
const { AuthFailureError, NotFoundError } = require('../../middlewares/error.response')

const HEADER = {
  API_KEY: 'x-api-key',
  CLIENT_ID: 'x-client-id',
  AUTHORIZATION: 'authorization',
  REFRESHTOKEN: 'refreshtoken'
}

const createTokenPair = async ( payLoad, publicKey, privateKey ) => {
  try {
      const accessToken = await JWT.sign( payLoad, privateKey, {
          algorithm: 'RS256',
          expiresIn: '2 days'
      })

      const refreshToken = await JWT.sign( payLoad, privateKey, {
          algorithm: 'RS256',
          expiresIn: '7 days'
      })

      JWT.verify( accessToken, publicKey, (err, decode) => {
          if(err){
              console.error(`error verify::`, err)
          } else{
              console.log(`decode verify::`, decode)
          }
      })
      return { accessToken, refreshToken }
  } catch (error) {

  }
}

const authentication = asyncHandler( async (req, res, next) => {
  /**
  * @author Quan
  * 1 - Check userId missing??
  * 2 - get accessToken
  * 3 - verifyToken
  * 4 - check user in db
  * 5 - check keyStore with this userId
  * 6 - OK all?? return next
  */

  // // 1.
  // const userId = req.headers[HEADER.CLIENT_ID]
  // if (!userId) throw new AuthFailureError('Invalid Request! - 53')

  // // 2.
  // const keyStore = await KeyTokenService.findByUserId( userId )
  // if (!keyStore) throw new NotFoundError('Not found keyStore! - 57')

  // // 3.
  // if(req.headers[HEADER.REFRESHTOKEN]){
  //   try {
  //     const refreshToken = req.headers[HEADER.REFRESHTOKEN]
  //     const decodeUser = JWT.verify( refreshToken, keyStore.privateKey )

  //     if(userId !== decodeUser.userId) throw new AuthFailureError('Invalid userId! - 65')

  //     req.keyStore = keyStore
  //     req.user = decodeUser
  //     req.refreshToken = refreshToken

  //     return next()

  //   } catch (error) {
  //     throw error
  //   }
  // }
  // const accessToken = req.headers[HEADER.AUTHORIZATION]
  // if (!accessToken) throw new AuthFailureError('Invalid Request! - 78')

  // try {
  //   const decodeUser = JWT.verify( accessToken, keyStore.publicKey )

  //   if(userId !== decodeUser.userId) throw new AuthFailureError('Invalid userId! - 83')

  //   req.keyStore = keyStore
  //   req.user = decodeUser // { userId, email }

  //   return next()

  // } catch (error) {
  //   throw error
  // }
})


const verifyJWT = async ( token, keySecret ) => {
  return await JWT.verify( token, keySecret )
}

module.exports = {
  createTokenPair,
  authenticationUser,
  verifyJWT,
}
