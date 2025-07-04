import { connectDB } from "../db";

export async function withDB<T>(handler: () => Promise<T>): Promise<T> {
  await connectDB();
  return handler();
}