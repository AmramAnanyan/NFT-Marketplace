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
  async getAllNftsFromDB() {
    try {
      return await NFTModel.find().populate('creator');
    } catch (error: any) {
      throw new DatabaseError(error.message);
    }
  }
  async getNftByIdFromDB(id: string | Types.ObjectId) {
    try {
      return await NFTModel.findById({ _id: id });
    } catch (error: any) {
      throw new DatabaseError(error.message);
    }
  }
  async searchNftsBySearchTermFromDB(searchTerm: string) {
    try {
      // eficient search with indexed titles and description
      // const searchResult = await NFTModel.find({
      //   $text: { $search: searchTerm }
      // });
      const regex = new RegExp(searchTerm, 'i');
      const searchResult = await NFTModel.find({
        $or: [{ title: regex }, { description: regex }]
      });
      return searchResult;
    } catch (error: any) {
      throw new DatabaseError(error.message);
    }
  }
}
export default NFTService;
