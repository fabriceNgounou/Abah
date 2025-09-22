import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
