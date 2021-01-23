import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId as MongoObjectId } from 'mongodb'

export interface IOrder extends Document {
  agentName: string
  price: number
  shipping: number
  vat: number
  total: number
  storeItemUrl: string
  productId: MongoObjectId
  assigned: boolean
  purchased: boolean
  completed: boolean
  createdOn: string
  updatedOn: string
}

const orderSchema: Schema = new Schema(
  {
    agentName: { type: String },
    price: {type: Number},
    shipping: {type: Number},
    vat: {type: Number},
    total: {type: Number},
    storeItemUrl: {type: String},
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    assigned: { type: Boolean, default: false },
    purchased: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } }
);

export const orderModel = mongoose.model<IOrder>('orders', orderSchema);