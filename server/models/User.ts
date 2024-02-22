import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String, // Add the 'type' property here
      required: true
    },
    avatarUrl: String
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
