import { TransactionStatus, TransactionSource, TransactionType, TransactionEntry } from '@modules/Transactions/interfaces'

export interface Transaction {
  status: TransactionStatus
  actor: string
  amount: string
  source: TransactionSource
  type: TransactionType
  entry: TransactionEntry
  scheduled: boolean
  dateEvent: Date
}
