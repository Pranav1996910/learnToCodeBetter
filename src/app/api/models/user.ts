import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  hash_password: string;
}

export const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true, unique: true },
  email: { type: String, lowercase:true, unique: true },
  hash_password: { type: String, required: true }
});

const User = mongoose.models['Users'] || mongoose.model<IUser>('Users', userSchema);
export default User;