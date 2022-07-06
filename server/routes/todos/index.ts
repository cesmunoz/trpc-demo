import { createRouter } from "../../context";
import create from './create';
import list from './list';
import update from './update';
import remove from './remove';

const routes = createRouter()
  .mutation("Create", create)
  .mutation("Update", update)
  .mutation("Remove", remove)
  .query("List", list);

export default routes;
