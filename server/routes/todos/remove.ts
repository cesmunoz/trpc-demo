import { z } from "zod";
import prisma from "../../prisma";

const schema = z.object({
  id: z.string(),
});

const handler = async ({ input }: any) => {
  const result = await prisma.todo.delete({
    where: {
      id: input.id,
    },
  });
  return result;
};

const endpointConfiguration = {
  input: schema,
  resolve: handler,
};

export default endpointConfiguration;
