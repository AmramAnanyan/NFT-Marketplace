import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { User } from './routes';
import mongoose from 'mongoose';
dotenv.config({ path: 'config/.env' });
mongoose
  .connect(
    'mongodb+srv://admin:H0VL0KYwnIAOm4HA@cluster0.teacnp5.mongodb.net/marketplaceV1'
  )
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
