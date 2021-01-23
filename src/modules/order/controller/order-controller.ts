import {Request, Response} from 'express'
import { orderRepository } from '../data/order-repository'

export class OrdersController {

  create() {
    return async (req: Request, res: Response, next: any) => {
      const data = req.body
      const result = await orderRepository.create(data)
      res.send(result._id)
    }
  }

  update() {
    return async (req: Request, res: Response, next: any) => {
      const {filter, data} = req.body
      const result = await orderRepository.updateOne(filter, data)
      res.send(result)
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

export const ordersController = new OrdersController()