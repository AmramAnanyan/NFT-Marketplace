import jwt from 'jsonwebtoken';
import UserModel, { IUser } from '../models/User';
import bcrypt from 'bcrypt';
import { Types, Document } from 'mongoose';
import { Request } from 'express';
import { JWT_SECRET_KEY } from '../config/envVariables';
import DatabaseError from '../errors/DatabaseError';
import HttpError from '../errors/HttpError';
// all works with request object needed to move controller
// in service should work only databases without request
// In controller should work only request and response it is a for client to server work
interface IDBUser extends Document {
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
  async createUser(userPayload: IUser): Promise<any> {
    let existUser: null | Document | HttpError = null;
    existUser = await this.checkExistEmail(userPayload.email);
    if (existUser instanceof HttpError) {
      throw existUser;
    }
    try {
      const hashedPassword = await this.dataHashing(userPayload.password);
      const doc: Document = new UserModel({
        name: userPayload.name,
        email: userPayload.email,
        password: hashedPassword
      });
      const user: IDBUser = await doc.save();
      const token = this.authorizeJWT(user._id);
      const { passwordHash, ...userData } = user._doc;
      return { userData, token };
    } catch (err) {
      throw new DatabaseError('User creation Error');
    }
  }
  async checkExistEmail(email: string) {
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        return new HttpError(422, 'User already exist');
      }
      return null;
    } catch (error) {
      throw new DatabaseError('Could not get operation');
    }
  }
  async getUserByEmail(userForm: Request) {
    const { email, password } = userForm.body;
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
