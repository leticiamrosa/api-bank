import { Transactions, TransactionsDay } from '@modules/Transactions/interfaces'
import { get } from '@helpers/functionHelpers'

type Response = Transactions

export default class TransactionsDto {
  private itemsTotal: number
  private results: TransactionsDay[]

  public constructor (response: Response) {
    this.itemsTotal = get(response, 'itemsTotal', 0)
    this.results = get(response, 'results', [])
  }

  public parse ():Transactions {
    return {
      itemsTotal: this.itemsTotal,
      results: this.results
    }
  }
}
