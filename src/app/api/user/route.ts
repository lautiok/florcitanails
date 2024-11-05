import User from "@/models/user";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
  }
}
