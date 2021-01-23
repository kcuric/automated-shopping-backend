import { productModel } from './product-model'

export class ProductRepository {

  async create(data: any){
    return await productModel.create(data)
  }

  updateById(id: any, data: any){
    return productModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    )
  }

  updateMany(filter: any, data: any){
    return productModel.updateMany(filter, data)
  }

  removeById(id: any){
    return productModel.remove({id})
  }

  remove(filter: any){
    return productModel.remove(filter)
  }

  findById(id: any){
    return productModel.findById(id)
  }

  findOne(filter: any){
    return productModel.findOne(filter)
  }

  findAll(filter: any){
    return productModel.find(filter)
  }

  count(filter: any){
    return productModel.count(filter)
  }
  
}

export const productRepository = new ProductRepository()