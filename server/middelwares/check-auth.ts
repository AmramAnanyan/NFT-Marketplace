import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/envVariables';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  try {
    if (token) {
      const decode = jwt.verify(token, JWT_SECRET_KEY);
      console.log(decode, 'decode token');
    }
  } catch (error) {}

  //   console.log(token, 'token');
  if (req.method === 'OPTION') {
    next();
  }
  console.log(req.header('Authorization'), 'header');
  res.send('success');
};
export default checkAuth;
