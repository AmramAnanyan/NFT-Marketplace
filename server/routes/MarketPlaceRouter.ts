import { Router } from 'express';
import MarketPlaceController from '../controllers/MarketPlaceController';

class MarketPlaceRoute {
  router: Router;

  constructor() {
    this.router = Router();
  }
  nftsRoute() {
    this.router.get('/all-nfts', MarketPlaceController.getAllNfts);
  }
  nftByIdRoute() {
    this.router.get('/nft/:id', MarketPlaceController.getNftById);
  }
  routers() {
    this.nftsRoute();
    this.nftByIdRoute();
    return this.router;
  }
}
export default new MarketPlaceRoute();
