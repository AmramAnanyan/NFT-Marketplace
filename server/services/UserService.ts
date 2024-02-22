import jwt from 'jsonwebtoken';
import { ValidationChain, body } from 'express-validator';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
// should be in env
const JWT_SECTRET_KEY = 'JWT_SECTRET_KEY';
class UserService {
  createToken(id: string | Types.ObjectId) {
    return jwt.sign({ id }, JWT_SECTRET_KEY, {
      expiresIn: '7d'
    });
  }
  verifyToken(token: string) {
    try {
      const decode = jwt.verify(token, JWT_SECTRET_KEY);
      console.log(decode, 'decode');
      return token;
    } catch (err) {
      throw new Error('Not verifyied');
    }
  }
  authorizeJWT(str: string | Types.ObjectId) {
    return this.verifyToken(this.createToken(str));
  }
  registrValidation(req: Request): ValidationChain[] {
    const validations = [
      body('email').isEmail(),
      body('password').isLength({ min: 5 }),
      body('avatarUrl').optional().isURL()
    ];
    return validations;
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
}
export default UserService;
