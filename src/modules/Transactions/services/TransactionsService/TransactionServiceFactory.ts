import TransactionsRepository from '@modules/Transactions/repositories/TransactionsRepository'
import TransactionsService from '@modules/Transactions/services/TransactionsService/TransactionsService'

export default class TransactionsServicesFactory {
  private transactionsRepository: TransactionsRepository

  public constructor () {
    this.transactionsRepository = new TransactionsRepository()
  }

  public build (): TransactionsService {
    return new TransactionsService({
      transactionsRepository: this.transactionsRepository
    })
  }
}
