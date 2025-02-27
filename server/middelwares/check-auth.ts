import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/envVariables';
import HttpError from '../errors/HttpError';
import { HttpStatus } from '../utils/http-status';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  const error = new HttpError(HttpStatus.UNAUTHORIZED, 'Authorization failed!');
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    if (token) {
      const decode: any = jwt.verify(token, JWT_SECRET_KEY);
      //@ts-ignore
      req['userData'] = { userId: decode.id, email: decode.email, token };
      return next();
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).send(error);
    }
  } catch (err: any) {
    const expiredDate = +new Date(err.expiredAt) < +new Date();
    if (expiredDate) {
      res.status(HttpStatus.UNAUTHORIZED).send(error);
    }
  }
};
export default checkAuth;
