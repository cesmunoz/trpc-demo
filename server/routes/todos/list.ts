import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler = {
  async resolve() {
    const todos = await prisma.todo.findMany();
    return todos;
  },
};

export default handler;