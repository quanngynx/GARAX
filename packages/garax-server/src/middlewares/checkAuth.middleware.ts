'use strict';
import { NextFunction, Request, Response } from 'express';
import { ApiKeyService } from '@/services';
import { ForbidenError, InternalServerError } from './error.response';
import { StatusCodes } from '@/common/utils';

const HEADER = {
  API_KEY: 'x-api-key',
  AUTHORIZATION: 'authorization'
};

interface ApiKeyProps extends Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objKey?: any;
}

export const checkApiKey = async (req: ApiKeyProps, _res: Response, next: NextFunction) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      throw new ForbidenError('Error');
    }
    //check objKey
    const objKey = await ApiKeyService.findById(key);

    if (!objKey) {
      throw new ForbidenError('Error');
    }

    req.objKey = objKey;
    return next();
  } catch (error) {
    throw new InternalServerError(`error::${error}`);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const permission = (permission: any) => {
  return (req: ApiKeyProps, res: Response, next: NextFunction) => {
    if (!req.objKey.permissions) {
      return res.status(StatusCodes.default.UNAUTHORIZED).json({
        message: "User's UNAUTHORIZED!"
      });
    }
    // console.log(`permissions::`, req.objKey.permissions);

    const validPermission = req.objKey.permissions.includes(permission);
    if (!validPermission) {
      return res.status(StatusCodes.default.FORBIDDEN).json({
        message: 'Permission denied'
      });
    }

    return next();
  };
};
