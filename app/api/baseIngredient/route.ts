import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function postBaseIngredient(request: Request) {
  try {
    const body = await request.json();
    const baseIngredient = await prisma.baseIngredient.create({
      data: body,
    });
    return NextResponse.json(baseIngredient);
  } catch (error) {
    return NextResponse.error();
  }
}
