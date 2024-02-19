import { Router } from 'express';
import UserController from '../controllers/UserController';
console.log(UserController);
class UserRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  private signUp() {
    this.router.post('/sign-up', UserController.signUp);
  }
  public routers() {
    this.signUp();
    return this.router;
  }
}

export default new UserRouter();
