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

interface CreateTransactionInput{
  description :string
  price:number,
  category:string,
  type:'income' | 'outcome',
}
interface TransactionContextType {
  transaction: Transaction[];
  fetchTransactions: (query? : string) => Promise<void>;
  createTransaction: (data:CreateTransactionInput) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function createTransaction(data: CreateTransactionInput) {
      const {description, price, category, type} = data
  const response =  await api.post('transations',{
        description,
        price,
        category,
        type,
        createdAt: new Date(),                
    })

    setTransaction(state => [ response.data, ...state])
  }

  async function fetchTransactions(query?: string) {
    const reponse = await api.get('/transations',{
      params: {
        _sort: 'createdAt',
        _order:'desc',        
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
        fetchTransactions,
        createTransaction 
        }}>
      {children}
    </TransactionContext.Provider>
  );
}
