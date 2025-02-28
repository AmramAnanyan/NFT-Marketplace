import { Router } from 'express';
import UserController from '../controllers/UserController';
import * as UserValidation from '../middelwares/userValidations';
import checkAuth from '../middelwares/check-auth';

class UserRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  private checkAuthentication() {
    this.router.use(checkAuth);
  }
  private signUp() {
    this.router.post(
      '/sign-up',
      UserValidation.registration,
      UserController.signUp
    );
  }
  private signIn() {
    this.router.post('/sign-in', UserValidation.login, UserController.signIn);
  }
  private getUser() {
    this.router.get('/user', UserController.getUser);
  }
  private getTopCreators() {
    this.router.get('/top-creators', UserController.getTopCreators);
  }
  public routers() {
    this.signUp();
    this.signIn();
    this.getTopCreators();
    this.checkAuthentication();
    this.getUser();
    return this.router;
  }
}

export default new UserRouter();
