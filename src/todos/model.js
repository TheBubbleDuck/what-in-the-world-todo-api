import mongoose, { Schema } from 'mongoose';

import tSchema        from './schema';
import transformModel from '../utils/transformModel';

const TodoSchema = new Schema(tSchema, {
  toJSON: {
    transform: transformModel
  }
});

//  Create the mongoose Model
const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;
