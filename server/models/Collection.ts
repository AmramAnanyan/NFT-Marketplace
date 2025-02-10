import { Schema } from 'mongoose';
const CollectionsSchema = new Schema({
  title: { type: String, required: true }
});
