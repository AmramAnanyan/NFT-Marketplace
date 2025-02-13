import mongoose from 'mongoose';
export interface IUser {
  email: string;
  name?: string;
  password: string;
  avatarUrl?: string;
}
const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: { type: String, required: true },
    password: {
      type: String,
      required: true
    },
    avatarUrl: String
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
