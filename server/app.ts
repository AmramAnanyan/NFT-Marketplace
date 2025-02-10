import express, { Request, Response, Application } from 'express';
import { HomeRouter, User } from './routes';
import mongoose from 'mongoose';
import { API_BASE_VERSION, DATABASE_URL, PORT } from './config/envVariables';
import path from 'path';
mongoose
  .connect(`${DATABASE_URL}`)
  .then(() => {
    console.log('DB conected');
  })
  .catch((err) => {
    console.log(err, 'db error');
  });
class App {
  #app: Application = express();
  #globalMiddleWares() {
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
    this.#app.get(API_BASE_VERSION, (req: Request, res: Response) => {
      res.send('this is worked with class');
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
