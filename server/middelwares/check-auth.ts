import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/envVariables';
import HttpError from '../errors/HttpError';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  const error = new HttpError(401, 'Authorization failed!');
  // if (req.method === 'OPTION') {
  //   next();
  // }
  try {
    if (token) {
      const decode: any = jwt.verify(token, JWT_SECRET_KEY);
      res.json({ userId: decode.id, email: decode.email, token });
    } else {
      return res.status(401).send(error);
    }
  } catch (err: any) {
    const expiredDate = +new Date(err.expiredAt) < +new Date();
    if (expiredDate) {
      res.status(401).send(error);
    }
  }
};
export default checkAuth;
