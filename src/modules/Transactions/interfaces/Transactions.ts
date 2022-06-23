import { TransactionsDay } from '@modules/Transactions/interfaces'

export interface Transactions {
  itemsTotal: number
  results: TransactionsDay[]
}
