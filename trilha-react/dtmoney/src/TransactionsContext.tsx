import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<Transactions[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
