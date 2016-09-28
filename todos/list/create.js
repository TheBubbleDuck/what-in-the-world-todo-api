import TodoModel from '../model';
/**
 * Fetch a list of todo items
 */
export default function *create() {
  const newTodo = yield TodoModel.create(this.request.body);
  this.body = newTodo;
}

//TODO: Validate the todo item to be created
