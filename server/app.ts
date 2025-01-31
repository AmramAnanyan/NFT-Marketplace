import express, { Request, Response, Application } from 'express';
import { User } from './routes';
import mongoose from 'mongoose';
import { DATABASE_URL, PORT } from './config/envVariables';
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
    this.#app.use(express.urlencoded({ extended: true }));
  }
  #routerMiddleWares() {
    this.#app.use('/api/v1', User.routers());
    this.#app.get('/api/v1', (req: Request, res: Response) => {
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
