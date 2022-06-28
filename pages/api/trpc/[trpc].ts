
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext, createRouter } from "../../../server/context";
import hello from "../../../server/routes/hello";
import posts from "../../../server/routes/posts";
import users from "../../../server/routes/users";
import todos from "../../../server/routes/todos";

export const appRouter = createRouter()
  .merge("hello", hello)
  .merge("users", users)
  .merge("posts", posts)
  .merge("todos", todos);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
