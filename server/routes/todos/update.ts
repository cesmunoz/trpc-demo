import { z } from "zod";
import prisma from "../../prisma";

const schema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  dueDate: z.string(),
  completed: z.boolean(),
});

const handler = async ({ input }: any) => {
  const { id, ...data } = input;
  const result = await prisma.todo.update({
    where: { id },
    data,
  });

  return result;
};

const endpointConfiguration = {
  input: schema,
  resolve: handler,
};

export default endpointConfiguration;
