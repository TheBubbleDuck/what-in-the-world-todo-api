const TodoModel = {
  title: String,
  items: [{
    label: String,
    complete: {
      type: Boolean,
      default: false
    }
  }],
  username: String
};

export default TodoModel;

//TODO: Handle stricter nested schema
