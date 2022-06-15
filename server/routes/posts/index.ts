import { createRouter } from "../../context";
import create from './create';
import list from './list'

const routes = createRouter()
  .mutation("create", create)
  .query("list", list);

export default routes;
