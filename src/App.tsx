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
