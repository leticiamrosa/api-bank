import TransactionsRepository from '@modules/Transactions/repositories/TransactionsRepository'
import { Transactions } from '@modules/Transactions/interfaces'

interface Dependencies {
  transactionsRepository: TransactionsRepository;
}

export default class TransactionsService {
  private transactionsRepository: TransactionsRepository

  public constructor ({ transactionsRepository }: Dependencies) {
    this.transactionsRepository = transactionsRepository
  }

  public async getTransactions (): Promise<[Transactions, any, Promise<void>]> {
    const response = await this.transactionsRepository.getTransactions()

    return response
  }
}
