import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function postRecipe(request: Request) {
  try {
    const body = await request.json();
    const recipe = await prisma.recipe.upsert({
      data: {
        where: { title: body.title },
        update: {},
        create: {
          title: body.title,
          description: body.description,
          ingredients: {
            create: body.ingredients,
          },
          preparation: body.preparation,
          advises: body.advises ? body.advises : null,
          image: body.image ? body.image : null,
          category: {
            connect: {
              id: body.categoryId,
            },
            createdAt: new Date(),
            lastUpdate: new Date(),
            reviews: {
              create: body.reviews,
            },
          },
        },
      },
    });
    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.error();
  }
}
