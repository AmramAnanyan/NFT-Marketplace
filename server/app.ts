import express, { Request, Response, Application } from 'express';
import { HomeRouter, MarketPlaceRouter, User } from './routes';
import mongoose from 'mongoose';
import { API_BASE_VERSION, DATABASE_URL, PORT } from './config/envVariables';
import path from 'path';
import { HttpMessages, HttpStatus } from './utils/http-status';

class App {
  static {
    mongoose
      .connect(`${DATABASE_URL}`)
      .then(() => {
        console.log('DB conected');
      })
      .catch((err) => {
        console.log(err, 'db error');
      });
  }
  #app: Application = express();
  #globalMiddleWares() {
    // this.#app.use(checkAgent);
    this.#app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
      );
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
      next();
    });
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: false }));
    this.#app.use(
      `${API_BASE_VERSION}/images`,
      express.static(path.join(__dirname, 'public', 'images'))
    );
  }
  #routerMiddleWares() {
    this.#app.use(API_BASE_VERSION, HomeRouter.routers());
    this.#app.use(API_BASE_VERSION, User.routers());
    this.#app.use(API_BASE_VERSION, MarketPlaceRouter.routers());
    this.#app.use((req: Request, res: Response) => {
      return res
        .status(HttpStatus.NOT_FOUND)
        .send(HttpMessages[HttpStatus.NOT_FOUND]);
    });
  }
  #runServer() {
    this.#app.listen(PORT, () => {
      console.log(`app runed on ${PORT} PORT`);
    });
  }
  run() {
    try {
      this.#runServer();
      this.#globalMiddleWares();
      this.#routerMiddleWares();
    } catch (e) {
      console.log('server not worked');
    }
  }
}
export default App;
