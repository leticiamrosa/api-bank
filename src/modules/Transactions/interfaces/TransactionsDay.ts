import { Transaction } from '@modules/Transactions/interfaces'

export interface TransactionsDay {
  date: string
  amountTotal: number
  items: Transaction[]
}
