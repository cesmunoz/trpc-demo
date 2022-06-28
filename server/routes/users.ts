import { createRouter } from "../context";

const users = createRouter().query("list", {
  resolve: () => {
    return [];
  },
});

export default users;