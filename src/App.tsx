import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global ";
import { createServer } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
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
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewOpenModal} onModalClose={handleCloseTransactionModal}/>
    </>
  );
}

export default App;
