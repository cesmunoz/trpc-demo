import { createRouter } from "../../context";
import create from './create';
import list from './list'

const routes = createRouter()
  .mutation("Create", create)
  .query("List", list);

export default routes;
