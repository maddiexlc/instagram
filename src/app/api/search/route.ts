import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

export async function GET() {
  // no session check since search is public
  return searchUsers().then((data) => NextResponse.json(data));
}
