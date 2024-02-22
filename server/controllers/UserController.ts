import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { Result, ValidationError, validationResult } from 'express-validator';
import UserModel from '../models/User';
import { Document } from 'mongoose';
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
        const hashedPassord = await this.userService.dataHashing(
          req.body.password
        );
        const doc: Document = new UserModel({
          email: req.body.email,
          passwordHash: hashedPassord
        });

        const user: IUser = await doc.save();

        const token = this.userService.authorizeJWT(user._id);

        const { passwordHash, ...userData } = user._doc;
        return res.json({
          succes: true,
          token,
          userData
        });
      }
      res.status(400).json(errors.array());
    } catch (err) {
      console.log(err, 'Registration error');
      res.status(500).json({ message: 'Registration error' });
    }
  };
  async signIn(req: Request, res: Response) {}
}

export default new UserController();

//H0VL0KYwnIAOm4HA
//mongodb+srv://admin:<password>@cluster0.teacnp5.mongodb.net/
