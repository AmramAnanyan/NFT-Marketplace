import { Request, Response } from 'express';
import NFTService from '../services/NFTService';

class HomeController {
  nftService: NFTService;
  constructor() {
    this.nftService = new NFTService();
  }

  public getTrendingUserNft = async (req: Request, res: Response) => {
    // this should be change hard coded for test
    const creatorId = '65d5175572f411c1ca018e94';
    try {
      const nfts = await this.nftService.getNFTsByCreatorId(creatorId);
      res.json(nfts);
    } catch (error) {
      console.log(error, 'error in home controller');
      res.status(404).send('not found any nfts');
    }
  };
}

export default HomeController;
