import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const recipe = await prisma.recipe.upsert({
      where: { title: body.title },
      update: {},
      create: {
        title: body.title,
        description: body.description,
        ingredients: {
          createMany: {
            data: body.ingredients.map((ingredient) => ({
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
              connect: {
                id: ingredient.recipeId,
                baseIngredientId: ingredient.baseIngredientId,
              },
              upsert: {
                where: {},
                update: {},
                create: {},
              },
            })),
          },
        },
        preparation: body.preparation,
        advises: body.advises ? body.advises : null,
        image: body.image ? body.image : null,
        category: {
          connect: {
            id: body.categoryId,
          },
        },
        createdAt: new Date(),
        lastUpdate: new Date(),
        reviews: {
          create: body.reviews,
        },
      },
    });
    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.error();
  }
}
