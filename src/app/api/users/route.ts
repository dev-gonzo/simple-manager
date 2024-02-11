

import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth/next"
import { NextResponse, NextRequest } from "next/server";



export async function GET(req: any, res: any) {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json({ message: "You must be logged in." }, {status: 401});
    }
  
    return NextResponse.json(session, { status: 201})
}
