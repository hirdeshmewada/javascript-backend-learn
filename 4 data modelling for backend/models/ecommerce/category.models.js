import mongoose from 'mongoose';

const categorySchema = new mongoose.Scheme(
  {
    name: {
      type: String,
      reuired: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
