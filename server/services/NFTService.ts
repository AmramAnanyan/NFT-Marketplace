import { INFT, NFTModel } from '../models';
import DatabaseError from '../errors/DatabaseError';
import { Types } from 'mongoose';

class NFTService {
  private NFTModel = NFTModel;
  async getNFTsByCreatorId(id: INFT['id']) {
    console.log('Querying NFTs with creatorId:', id);
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId');
      }

      const nfts = await NFTModel.find({
        creatorId: new Types.ObjectId(id)
      });
      console.log(
        new Types.ObjectId(id),
        nfts,
        'nfts',
        Types.ObjectId.isValid(id)
      );
      return nfts;
    } catch (error: any) {
      console.log(error, 'error');
      throw new DatabaseError(error.message);
    }
  }
}
export default NFTService;
