import { Request, Response, Router } from 'express';
import HomeController from '../controllers/HomeController';

class HomeRouter {
  private router: Router;
  private controller: HomeController;
  constructor() {
    this.router = Router();
    this.controller = new HomeController();
  }
  private getTrendingCollections() {
    this.router.get('/trending-collections', (req: Request, res: Response) => {
      const collections = [];
      res.send('Hello from module');
    });
  }
  private trendingUserNft() {
    this.router.get('/trending-user-nft', this.controller.getTrendingUserNft);
  }
  public routers() {
    this.trendingUserNft();
    this.getTrendingCollections();
    return this.router;
  }
}

export default new HomeRouter();
