import { z } from "zod";
import prisma from "../../prisma";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.string(),
  completed: z.boolean(),
});


const handler = async ({ input }: any) => {
  const post = await prisma.todo.create({
    data: input,
  });
  return post;
};

const endpointConfiguration = {
  input: schema,
  resolve: handler,
};

export default endpointConfiguration;
