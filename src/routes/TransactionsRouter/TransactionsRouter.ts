import { Router } from 'express'
import TransactionServiceFactory from '@modules/Transactions/services/TransactionsService/TransactionServiceFactory'
import RouterResponse from '@utils/RouterResponse/'

const TransactionsRouter = Router()

TransactionsRouter.get('/', async (req, res) => {
  const response = new RouterResponse({ routerResponse: res })

  try {
    const transactionsService = new TransactionServiceFactory().build()
    const transactions = await transactionsService.getTransactions()

    return response.send({
      payloadStatus: 200,
      payloadData: transactions
    })
  } catch (error) {
    return response.sendError({
      payloadStatus: 400,
      payloadError: {
        error: error.message
      }
    })
  }
})

export default TransactionsRouter
