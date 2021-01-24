import express from 'express'
import { ordersController } from './controller/order-controller'

const router = express.Router()

router.get('/', 
  ordersController.findOne(),
)

router.post('/', 
  ordersController.create(),
)

router.put('/', 
  ordersController.update(),
)

router.delete('/', 
  ordersController.delete(),
)

export const ordersRouter = router