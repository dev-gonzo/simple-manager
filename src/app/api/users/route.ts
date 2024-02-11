

import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth/next"
import { NextResponse, NextRequest } from "next/server";



export async function GET(req: any, res: any) {
    const session = await getServerSession();
    const teste = process?.env?.GOOGLE_CLIENT_ID;

    if (!session) {
      return NextResponse.json({ message: `NEw You must be logged in. ${teste}` }, {status: 401});
    }
  
    return NextResponse.json(session, { status: 201})
}
