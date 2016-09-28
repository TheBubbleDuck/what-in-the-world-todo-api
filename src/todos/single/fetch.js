import TodoModel from '../model';
/**
 * Fetch a single of todo items
 */
export default function *fetch() {
  const { id } = this.params;
  const Todo = yield TodoModel.findById(id);

  //  Handle a null doc
  if (!Todo) {
    this.status = 404;
    this.body = {
      message: 'Could not find the todo!'
    };
  } else {
    this.body = Todo;
  }
}
//TODO: Add Error Handling
