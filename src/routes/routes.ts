import { Router } from 'express'

import TransactionsRouter from '@routes/TransactionsRouter/TransactionsRouter'

const routes = Router()
const baseUrl = '/api/v1'

routes.use(`${baseUrl}/transactions`, TransactionsRouter)

export default routes
