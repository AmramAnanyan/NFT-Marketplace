import { Router } from 'express';
import UserController from '../controllers/UserController';
import * as UserValidation from '../middelwares/userValidations';

class UserRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  private signUp() {
    this.router.post(
      '/sign-up',
      UserValidation.registeration,
      UserController.signUp
    );
  }
  private signIn() {
    this.router.post('/sign-in', UserValidation.login, UserController.signIn);
  }
  public routers() {
    this.signUp();
    this.signIn();
    return this.router;
  }
}

export default new UserRouter();
