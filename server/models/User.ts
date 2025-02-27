import mongoose from 'mongoose';
import { UserRole } from '../utils/roles';
export interface IUser {
  email: string;
  name?: string;
  password: string;
  avatarUrl?: string;
  totalSales?: number;
  currency?: string;
  role: UserRole;
  isActive: boolean;
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
    role: { type: String, required: true, default: UserRole.USER },
    isActive: { type: Boolean, required: true, default: true },
    avatarUrl: String
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
