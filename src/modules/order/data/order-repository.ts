import { orderModel } from './order-model'
import mongoose from 'mongoose'

export class OrderRepository {

  async create(data: any){
    return await orderModel.create(data)
  }

  async updateById(id: any, data: any){
    return orderModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: data },
      { new: true }
    )
  }

  async updateOne(filter: any, data: any){
    return await orderModel.updateOne(filter, data)
  }

  updateMany(filter: any, data: any){
    return orderModel.updateMany(filter, data)
  }

  removeById(id: any){
    return orderModel.remove({id})
  }

  remove(filter: any){
    return orderModel.remove(filter)
  }

  findById(id: any){
    return orderModel.findById(id)
  }

  async findOne(filter: any){
    return await orderModel.findOne(filter).populate('productId')
  }

  findAll(filter: any){
    return orderModel.find(filter)
  }

  count(filter: any){
    return orderModel.count(filter)
  }
  
}

export const orderRepository = new OrderRepository()