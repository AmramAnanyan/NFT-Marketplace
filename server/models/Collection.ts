import mongoose, { Schema, Types, Document, model } from 'mongoose';
import { INFT } from './NFT';
import { IUser } from './User';
export interface ICollection extends Document {
  title: string;
  description: string;
  creator: Types.ObjectId | IUser;
  nfts: INFT;
  collectionImage?: string;
}
const CollectionSchema = new Schema<ICollection>({
  title: { type: String, required: true, maxlength: 200 },
  description: { type: String, required: true, maxlength: 2000 },
  creator: { type: Types.ObjectId, ref: 'User', required: true },
  nfts: { type: Types.ObjectId, ref: 'nfts', required: true },
  collectionImage: { type: String, required: false }
});

CollectionSchema.index({ title: 'text', description: 'text' });
CollectionSchema.index({ creator: 1 });
export default model('NftCollection', CollectionSchema);
