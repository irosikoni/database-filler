import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

const productSchema = z.object({
  name: z.string(),
  dietType: z.string(),
});

export async function postProduct(request: Request) {
  try {
    const body = productSchema.parse(await request.json());
    const diet = await prisma.dietType.upsert({
      where: { name: body.dietType },
      update: {},
      create: { name: body.dietType },
    });
    const product = await prisma.product.upsert({
      where: { name: body.name },
      update: {},
      create: { name: body.name },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.error();
  }
}
