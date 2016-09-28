import mongoose from 'mongoose';
import TodoModel from '../model';

const { ObjectId } = mongoose.Types;
/**
 * Update a single todo
 */
export default function *update() {
  const { id } = this.params;
  const Todo = yield TodoModel.findOneAndUpdate({ _id: ObjectId(id)},
    {
      $set: this.request.body
    },
    {
      upsert: true,
      new: true
    });

  //  Handle a null doc
  if (!Todo) {
    this.status = 404;
    this.body = {
      message: 'Could not find the todo!'
    };
  } else {
    this.status = 200;
    this.body = Todo;
  }
}

//TODO: Handle error on empty body
