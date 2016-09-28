import TodoModel from '../model';
/**
 * Fetch a list of todo items
 */
export default function *fetch() {
  const TodoList = yield TodoModel.find({});
  this.body = TodoList;
}

//TODO: Refactor to possibly use a projection
