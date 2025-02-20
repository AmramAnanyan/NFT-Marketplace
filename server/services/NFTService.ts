import { INFT, NFTModel } from '../models';
import DatabaseError from '../errors/DatabaseError';
import { Types } from 'mongoose';

class NFTService {
  private NFTModel = NFTModel;
  async getNFTsByCreatorId(id: INFT['id']) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId');
      }
      return await NFTModel.find().populate('creator');
    } catch (error: any) {
      throw new DatabaseError(error.message);
    }
  }
}
export default NFTService;
