import { Form } from "./components/Form";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const categories = await prisma.category.findMany();

  return (
    <Form
      categories={categories.map((c) => c.name)}
      diets={[]}
      units={[]}
      ingredients={[]}
    />
  );
}
