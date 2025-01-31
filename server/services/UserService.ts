import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import bcrypt from 'bcrypt';
import { Types, Document } from 'mongoose';
import { Request } from 'express';
import { JWT_SECRET_KEY } from '../config/envVariables';

interface IUser extends Document {
  _doc?: any;
}

class UserService {
  createToken(id: string | Types.ObjectId) {
    return jwt.sign({ id }, JWT_SECRET_KEY, {
      expiresIn: '7d'
    });
  }
  verifyToken(token: string) {
    try {
      const decode = jwt.verify(token, JWT_SECRET_KEY);
      console.log(decode, 'decode');
      return token;
    } catch (err) {
      throw new Error('Not verifyied');
    }
  }
  authorizeJWT(str: string | Types.ObjectId) {
    return this.verifyToken(this.createToken(str));
  }

  async dataHashing(str: string): Promise<string | Error> {
    try {
      const salt = await bcrypt.genSalt(8);
      const hashData = await bcrypt.hash(str, salt);
      return hashData;
    } catch (err) {
      throw new Error('Data hashing Error');
    }
  }
  async createUser(req: Request): Promise<any> {
    try {
      const hashedPassord = await this.dataHashing(req.body.password);
      const doc: Document = new UserModel({
        email: req.body.email,
        passwordHash: hashedPassord
      });

      const user: IUser = await doc.save();

      const token = this.authorizeJWT(user._id);

      const { passwordHash, ...userData } = user._doc;
      return { userData, token };
    } catch (err) {
      throw new Error('User creation Error');
    }
  }
  async getUserByEmail(req: Request) {
    console.log('worked getUserByEmail');
    const { email, password } = req.body;
    try {
      const userData = await UserModel.findOne({ email });
      const isValidPassword = await bcrypt.compare(
        password,
        //@ts-ignore
        userData.passwordHash
      );
      if (userData && isValidPassword) {
        const token = this.authorizeJWT(userData._id);
        return { token, userData };
      } else {
        throw new Error('User is not found');
      }
    } catch (err) {
      throw new Error('User is not found');
    }
  }
}
export default UserService;
