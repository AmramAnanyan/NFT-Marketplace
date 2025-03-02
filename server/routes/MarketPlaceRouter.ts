import { Router } from 'express';
import MarketPlaceController from '../controllers/MarketPlaceController';
import * as Validation from '../middelwares/searh-validation';

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
  searchNftByTitle() {
    this.router.post(
      '/all-nfts',
      Validation.searchValidation,
      MarketPlaceController.searchNftByTitle
    );
  }
  routers() {
    this.nftsRoute();
    this.nftByIdRoute();
    this.searchNftByTitle();
    return this.router;
  }
}
export default new MarketPlaceRoute();
