import { Schema } from 'mongoose';
import { INFT, NFTModel } from '../models';
class NFTService {
  private NFTModel = NFTModel;
  constructor() {}
  async getNFTsByCreatorId(id: INFT['id']) {
    const userNfts = await this.NFTModel.findById(id);
    return userNfts;
  }
}
export default NFTService;
