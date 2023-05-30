import { ReactNode, createContext, useEffect, useState } from "react";

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
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transations');
    const data = await response.json();
    setTransaction(data);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
