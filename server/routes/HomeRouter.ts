import { Request, Response, Router } from 'express';

class HomeRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  private getTrendingCollections() {
    this.router.get('/trending-collections', (req: Request, res: Response) => {
      const collections = [];
      res.send('Hello from module');
    });
  }
  private getNFTsByUserId() {
    this.router.get('/trending-user-nft', (req: Request, res: Response) => {
      const hardCodeUserId = '65d5175572f411c1ca018e94';
      res.json([]);
    });
  }
  public routers() {
    this.getNFTsByUserId();
    this.getTrendingCollections();
    return this.router;
  }
}

export default new HomeRouter();
