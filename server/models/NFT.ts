import { Schema, Types, model, Document } from 'mongoose';
import { IUser } from './User';
import { ICollection } from './Collection';

export interface INFT extends Document {
  title: string;
  description: string;
  image: string;
  price: number;
  creator: Types.ObjectId | IUser;
  nftCollection?: Types.ObjectId | ICollection;
  createdAt?: Date;
  updatedAt?: Date;
}
// needed to validate image url
const NFTSchema = new Schema<INFT>(
  {
    title: { type: String, required: true, maxlength: 150 },
    description: { type: String, required: true, maxlength: 2000 },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    creator: { type: Types.ObjectId, ref: 'User', required: true },
    nftCollection: {
      type: Types.ObjectId,
      ref: 'NftCollection',
      required: false
    }
  },
  { timestamps: true }
);
NFTSchema.index({ title: 'text', description: 'text' });
NFTSchema.index({ creator: 1 });
NFTSchema.index({ price: 1 });
export default model('nfts', NFTSchema);
