import express from 'express'
import { ordersController } from './controller/orders-controller'

const router = express.Router()

router.post('/', 
  ordersController.create(),
)

router.put('/', 
  ordersController.update(),
)

router.delete('/', 
  ordersController.delete(),
)

router.put('/', 
  ordersController.assign(),
)

export const ordersRouter = router