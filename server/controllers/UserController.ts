import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  signUp = async (req: Request, res: Response) => {
    this.userService.authorizeJWT(req.body);
    res.send(req.body);
  };
}

export default new UserController();
