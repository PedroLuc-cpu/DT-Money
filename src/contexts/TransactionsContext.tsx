import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transaction: Transaction[];
  fetchTransactions: (query? : string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const reponse = await api.get('/transations',{
      params: {
        q: query
      }
    })
    setTransaction(reponse.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider 
      value={{ 
        transaction,
        fetchTransactions 
        }}>
      {children}
    </TransactionContext.Provider>
  );
}
