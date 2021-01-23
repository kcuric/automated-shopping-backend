import {Request, Response} from 'express'
import { productRepository } from '../data/product-repository'

export class ProductsController {

  create() {
    return async (req: Request, res: Response, next: any) => {
      const data = req.body
      const response = await productRepository.create(data)
      res.send(response)
    }
  }

  update() {
    return (req: Request, res: Response, next: any) => {
      res.sendStatus(200)
    }
  }

  delete() {
    return (req: Request, res: Response, next: any) => {
      res.sendStatus(200)
    }
  }

  assign() {
    return (req: Request, res: Response, next: any) => {
      res.sendStatus(200)
    }
  }

}

export const productsController = new ProductsController()