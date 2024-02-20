import mongoose from "mongoose";

export default async function dbConnect(): Promise<void> {
  await mongoose.connect(process.env.MONGODB_URI || "");
}

export async function dbDisconnect(): Promise<void> {
  await mongoose.disconnect();
}