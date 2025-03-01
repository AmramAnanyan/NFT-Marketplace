import DatabaseError from '../errors/DatabaseError';
import HttpError from '../errors/HttpError';
import NFTService from '../services/NFTService';
import { HttpMessages, HttpStatus } from '../utils/http-status';
import { Request, Response } from 'express';

class MarketPlaceController {
  nftsService: NFTService;
  constructor() {
    this.nftsService = new NFTService();
  }
  getAllNfts = async (req: Request, res: Response) => {
    try {
      const nfts = await this.nftsService.getAllNftsFromDB();
      return res.json(nfts);
    } catch (error: unknown) {
      if (error instanceof DatabaseError) {
        const error = new HttpError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          HttpMessages[HttpStatus.INTERNAL_SERVER_ERROR]
        );
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
      }
    }
  };
  getNftById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const nft = await this.nftsService.getNftByIdFromDB(id);
      if (!nft) {
        return res.status(HttpStatus.NO_CONTENT).end();
      }
      return res.json(nft);
    } catch (err: unknown) {
      if (err instanceof DatabaseError) {
        const error = new HttpError(
          HttpStatus.BAD_REQUEST,
          HttpMessages[HttpStatus.BAD_GATEWAY]
        );
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    }
  };
}

export default new MarketPlaceController();
