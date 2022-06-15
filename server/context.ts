import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { ZodError } from "zod";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    if (opts?.req.headers.authorization) {
      // do decodeJWT
    }
    return null;
  }

  const user = await getUserFromHeader();

  return {
    user,
    test: "this is a test",
  };
}

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>()
  .formatError(({ shape, error }) => {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' &&
          error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      }
    };
  }).middleware(async ({ path, type, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;
    result.ok
      ? console.log("OK request timing:", { path, type, durationMs })
      : console.log("Non-OK request timing", { path, type, durationMs });

    return result;
  })
  
}

