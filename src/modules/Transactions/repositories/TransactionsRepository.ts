import { compose } from '@helpers/functionHelpers'
import dtoMapper from '@utils/api/dtoMapper/dtoMapper'
import projectCatcher from '@utils/api/projectCatcher/projectCatcher'
import TransactionsDto from '@modules/Transactions/dto/TransactionsDto'
import { Transactions } from '@modules/Transactions/interfaces'

import dataMock from '../mocks/data.json'

export default class TransactionsRepository {
  public async getTransactions (): Promise<[Transactions, Error]> {
    const apiResponseMock: any = [
      {
        status: 200,
        data: dataMock
      }
    ]

    const TransactionsDtoMapper = dtoMapper(TransactionsDto)

    return compose(
      TransactionsDtoMapper,
      projectCatcher
    )(apiResponseMock)
  }
}
