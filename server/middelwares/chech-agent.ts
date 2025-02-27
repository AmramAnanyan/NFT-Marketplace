import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

export default (req: Request, res: Response, next: NextFunction) => {
  //Check user agent for SEO if request send bot needed generate static HTML file
  if (req.headers['user-agent']?.includes('PostmanRuntime')) {
    return res.sendFile(
      path.join(__dirname, '../public', 'views', 'home.html')
    );
  }
  return next();
};
