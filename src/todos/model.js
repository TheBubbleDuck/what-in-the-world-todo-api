import mongoose, { Schema } from 'mongoose';

import tSchema        from './schema';
import transformModel from '../utils/transformModel';

const TodoSchema = new Schema(tSchema, {
  toJSON: {
    transform: transformModel
  }
});
let Todo;
try {
  Todo = mongoose.model('Todo', TodoSchema);
} catch (e) {
  console.log('Model is already available');
  Todo = mongoose.model('Todo');
}
export default Todo;
