import express from 'express'
import { productsController } from './controller/product-controller'

const router = express.Router()

router.post('/', 
  productsController.create(),
)

router.put('/', 
  productsController.update(),
)

router.delete('/', 
  productsController.delete(),
)

router.put('/', 
  productsController.assign(),
)

export const productsRouter = router