import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  try {
    //return if its client
    const session = await getServerAuthSession();
    if (!session) {
      return NextResponse.json({ message: "Error" });
    }
    //make a connection between the user and the url

    const createResume = await prisma.user.create({
      data: {
        resume: data.url,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
