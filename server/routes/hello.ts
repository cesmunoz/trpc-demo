import { z } from "zod";
import { createRouter } from "../context";

const hello = createRouter().query("list", {
  input: z.object({
    title: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
  }),
  resolve: ({ input }) => {
    return {
      greetings: `hello, ${input?.title ?? "world"}`,
    };
  },
});

export default hello;