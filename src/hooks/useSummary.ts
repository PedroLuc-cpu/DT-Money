import { TransactionContext } from '../contexts/TransactionsContext'
import { useContext } from 'react'

export function useSummary() {
  const { transaction } = useContext(TransactionContext)

  const summary = transaction.reduce(
    (acc, transactions) => {
      if (transactions.body === 'income') {
        acc.income += transactions.price
        acc.total += transactions.price
      } else {
        acc.outcome += transactions.price
        acc.total -= transactions.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
