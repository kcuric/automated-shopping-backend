import express, {Application} from 'express'
import bodyParser from 'body-parser'
import { ordersRouter } from './modules/orders/orders-routes'

const app: Application = express()

app.use(bodyParser.json())
app.use('/orders', ordersRouter)

app.listen(8000, () => console.log('Server running ...'))