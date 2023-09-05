import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  dietType: z.string().array(),
});

const ingredientSchema = z.object({
  product: productSchema,
  amount: z.number(),
  unit: z.string(),
});

const receipeSchema = z.object({
  title: z.string(),
  description: z.string(),
  ingredients: z.array(ingredientSchema),
  preparation: z.string(),
  advises: z.string().optional(),
  image: z.string().optional(),
  category: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = receipeSchema.parse(await request.json());
    const recipe = await prisma.recipe.upsert({
      where: { title: body.title },
      update: {},
      create: {
        title: body.title,
        description: body.description,
        preparation: body.preparation,
        advises: body.advises ? body.advises : null,
        image: body.image ? body.image : null,
        category: {
          connect: {
            name: body.category,
          },
        },
        createdAt: new Date(),
        lastUpdate: new Date(),
      },
    });
    body.ingredients.forEach(async (ingredient) => {
      ingredient.product.dietType.forEach(async (dietName) => {
        const dietType = await prisma.dietType.upsert({
          where: { name: dietName },
          update: {},
          create: {
            name: dietName,
            products: {
              connectOrCreate: {
                where: { name: ingredient.product.name },
                create: {
                  name: ingredient.product.name,
                },
              },
            },
          },
        });
      });
      const ingredientType = await prisma.ingredient.create({
        data: {
          amount: ingredient.amount,
          unit: ingredient.unit,
          recipe: {
            connect: {
              title: body.title,
            },
          },
          product: {
            connect: {
              name: ingredient.product.name,
            },
          },
        },
      });
    });

    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.error();
  }
}
