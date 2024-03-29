import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { Result, ValidationError, validationResult } from 'express-validator';
import UserModel from '../models/User';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';
interface IUser extends Document {
  _doc?: any;
}

class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  signUp = async (req: Request, res: Response) => {
    try {
      const errors: Result<ValidationError> = validationResult(req);
      if (errors.isEmpty()) {
        const { userData, token } = await this.userService.createUser(req);
        return res.json({
          succes: true,
          token,
          userData
        });
      }
      res.status(400).json({ succes: false, errors: errors.array() });
    } catch (err) {
      res.status(500).json({ message: 'Registration error' });
    }
  };
  signIn = async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const user = await this.userService.getUserByEmail(req);
        res.json({ succes: true, token: user?.token });
      } else {
        res.status(400).json({ succes: false, errors: errors.array() });
      }
    } catch (err) {
      res
        .status(500)
        .json({ succes: false, message: 'Wrong Email or Password' });
    }
  };
}

export default new UserController();

//H0VL0KYwnIAOm4HA
//mongodb+srv://admin:<password>@cluster0.teacnp5.mongodb.net/
