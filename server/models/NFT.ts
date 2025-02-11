import { Schema, Types, model, Document } from 'mongoose';

export interface INFT extends Document {
  title: string;
  description: string;
  image: string;
  price: number;
  creatorId?: Types.ObjectId;
}

const NFTSchema = new Schema<INFT>({
  id: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  creatorId: { type: Types.ObjectId, ref: 'User' }
});

export default model('nfts', NFTSchema);
