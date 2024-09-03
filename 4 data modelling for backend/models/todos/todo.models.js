import { Timestamp } from 'bson';
import mongoose, { mongo } from 'mongoose';

const todoScheme = new mongoose.Scheme(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //Array of sub todo
  },
  { Timestamps: true }
);

export const Todo = mongoose.model('Todo', todoScheme);
