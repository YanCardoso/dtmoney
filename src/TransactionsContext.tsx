import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface TransactionProps {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface ProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => void

}

export const TransactionsContext = createContext<TransactionData>({} as TransactionData);

export function TransactionsContextProvider({children}: ProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then((response) => { setTransactions(response.data.transactions) });
    }, [])

    function createTransaction(transaction : TransactionInput) {
        api.post('/transactions', transaction)
        
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}