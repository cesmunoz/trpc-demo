import { z } from "zod";

const schema = z.object({
  title: z.string(),
});

const handler = ({ input }: any) => {
  return {
    id: "xxxx",
    ...input,
  };
};

const endpointConfiguration = {
  input: schema,
  resolve: handler,
};

export default endpointConfiguration;
