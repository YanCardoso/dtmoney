import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global ";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

createServer({
  models: {
    transaction: Model

  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 2000,
          category: 'Dev',
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1000,
          category: 'Moradia',
          createdAt: new Date('2021-03-23 04:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })


  }
})

export function App() {

  const [isNewOpenModal, setIsNewOpenModal] = useState(false)

  function handleOpenTransactionModal() {
    setIsNewOpenModal(true)
  }

  function handleCloseTransactionModal() {
    setIsNewOpenModal(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewOpenModal} onModalClose={handleCloseTransactionModal} />
    </>
  );
}

export default App;
