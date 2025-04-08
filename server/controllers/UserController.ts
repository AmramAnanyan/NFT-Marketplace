import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { Result, ValidationError, validationResult } from 'express-validator';
import { Document } from 'mongoose';
import HttpError from '../errors/HttpError';
import { HttpMessages, HttpStatus } from '../utils/http-status';
import DatabaseError from '../errors/DatabaseError';

class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  signUp = async (req: Request, res: Response) => {
    const userForm = req.body;
    try {
      const errors: Result<ValidationError> = validationResult(req);
      if (errors.isEmpty()) {
        const { userData, token } = await this.userService.createUser(userForm);
        return res
          .json({
            success: true,
            token,
            userData
          })
          .cookie('privateToken', token);
      }
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, errors: errors.array() });
    } catch (err) {
      if (err instanceof DatabaseError) {
        return res
          .status(err.statusCode)
          .json({ success: false, message: err.message });
      }
      // return res
      //   .status(HttpStatus.INTERNAL_SERVER_ERROR)
      //   .json({ message: 'Registration error' });
    }
  };
  signIn = async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const user = await this.userService.getUserByEmail(req.body);
        res.json({ success: true, token: user?.token });
      } else {
        res.status(400).json({ success: false, errors: errors.array() });
      }
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: 'Wrong Email or Password' });
    }
  };
  getUser = async (req: Request, res: Response) => {
    //@ts-ignore
    const user = await this.userService.getUserByIdFromDB(req.userData.userId);
    return res.json(user);
  };
  getTopCreators = async (req: Request, res: Response) => {
    const query = req.query;
    let startRanking = 0;
    let endRanking = 0;
    if (query && 'startRanking' in query && 'endRanking' in query) {
      startRanking = Number(query.startRanking);
      endRanking = Number(query.endRanking);
    } else if (query && 'startRanking' in query && !('endRanking' in query)) {
      endRanking = await this.userService.getUserCountInDB();
    } else {
      startRanking = 0;
      endRanking = await this.userService.getUserCountInDB();
    }
    try {
      const topCreators = await this.userService.getUsersByRatingFromDB(
        startRanking,
        endRanking
      );
      return res.json(topCreators);
    } catch (err) {
      const error = new HttpError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
      );
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default new UserController();

//H0VL0KYwnIAOm4HA
//mongodb+srv://admin:<password>@cluster0.teacnp5.mongodb.net/
