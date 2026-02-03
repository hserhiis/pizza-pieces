import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {prisma} from "@/prisma/prisma-client";
import {NextRequest} from "next/dist/server/web/spec-extension/request";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const data = await req.json()
    const user = await prisma.user.create({data})
    return NextResponse.json(user)
}