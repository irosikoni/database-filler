import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

const productSchema = z.object({
  name: z.string(),
  dietType: z.string().array(),
});

export async function postProduct(request: Request) {
  try {
    const body = productSchema.parse(await request.json());
    body.dietType.forEach((dietName) => {
      const dietType = prisma.dietType.upsert({
        where: { name: dietName },
        update: {},
        create: {
          name: dietName,
          products: {
            connectOrCreate: {
              where: { name: body.name },
              create: {
                name: body.name,
              },
            },
          },
        },
      });
    });

    return NextResponse.json({ message: "Product created" });
  } catch (error) {
    return NextResponse.error();
  }
}
