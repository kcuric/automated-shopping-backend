import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  firstName: string
  // createdOn: string
  // updatedOn: string
}

const productSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
  },
  // { timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } }
);

export const productModel = mongoose.model<IProduct>('products', productSchema);