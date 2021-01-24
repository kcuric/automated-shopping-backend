import express, {Application} from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { ordersRouter } from './modules/order/order-routes'
import { productsRouter } from './modules/product/product-routes'
import { queryParser } from './shared/middleware/query-parser'

const config = dotenv.config()

if (config.error) {
  throw config.error
}

const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 8000

if(MONGODB_URL === undefined){
  throw new Error('MONGODB_URL is missing.')
}

mongoose.connect(
  MONGODB_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true },
)

const app: Application = express()

app.use(queryParser)
app.use(bodyParser.json())
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)


app.listen(PORT, () => console.log('Server running ...'))