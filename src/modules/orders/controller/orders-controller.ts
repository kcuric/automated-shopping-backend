import {Request, Response} from 'express'

export class OrdersController {

  create() {
    return (req: Request, res: Response, next: any) => {
      res.sendStatus(200)
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

export const ordersController = new OrdersController()