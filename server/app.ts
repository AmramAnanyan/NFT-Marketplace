import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { User } from './routes';
dotenv.config({ path: 'config/.env' });

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
    const PORT = process.env.PORT || 4000;
    this.#app.listen(PORT, () => {
      console.log(`app runed on ${process.env.PORT} PORT`);
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
