'use strict'
import { NextFunction, Request, Response } from 'express';
import { ApiKeyService } from '@/services';
import { ForbidenError } from './error.response';


const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

interface ApiKeyProps extends Request {
  objKey?: any;
}

export const checkApiKey = async (req: ApiKeyProps, _res: Response, next: NextFunction) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString()
        if (!key) {
          throw new ForbidenError('Error');
        }
        //check objKey
        const objKey = await ApiKeyService.findById(key)

        if(!objKey){
          throw new ForbidenError('Error');
        }

        req.objKey = objKey
        return next()
    } catch (error) { }
}

export const permission = ( permission: any ) => {
    return (req: ApiKeyProps, res: Response, next: NextFunction) => {
        if(!req.objKey.permissions){
            return res.status(403).json({
                message: 'Permission denied'
            })
        }
        console.log(`permissions::`, req.objKey.permissions)

        const validPermission = req.objKey.permissions.includes(permission)
        if(!validPermission){
            return res.status(403).json({
                message: 'Permission denied'
            })
        }

        return next()
    }
}

// const authenticateToken = (req, res, next) => {
//   const authHeader =  req.headers['authorization']; // Lấy Authorization header
//   const token =  authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized access' });

//     }
//     console.log(decoded);
//     req.IDAcc=decoded.userID;
//     req.role=decoded.role;

//     next();
//   });
// };

// export default authenticateToken;
