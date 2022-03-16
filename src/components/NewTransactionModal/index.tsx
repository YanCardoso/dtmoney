import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";

import { Container, TransactionTypeContainer, RadioBox } from "./styles"

import closeImg from "../../assets/close.svg"
import incomeBtn from "../../assets/income.svg"
import outcomeBtn from "../../assets/outcome.svg"
import { TransactionsContext } from "../../TransactionsContext";


interface TransactionModalProps {
    isOpen: boolean;
    onModalClose: () => void;
}

export function NewTransactionModal({ isOpen, onModalClose }: TransactionModalProps) {

    const {createTransaction} = useContext(TransactionsContext);

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        setType('deposit')
        setTitle('')
        setAmount(0)
        setCategory('')
        onModalClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onModalClose}
            overlayClassName="transactionModal-overlay"
            className="transactionModal-content"
        >
            <button 
            type="button" 
            onClick={onModalClose}
            className="btn-close"
            >
                <img src={closeImg} alt="Fechar" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Nova Transação</h2>

                <input 
                placeholder="Título" 
                value={title}
                onChange={event => setTitle(event.target.value)} 
                />
                <input 
                placeholder="Valor"
                type="number" 
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}

                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor={"green"}
                        onClick={() => { setType('deposit') }}
                    >
                        <img src={incomeBtn} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor={"red"}
                        onClick={() => { setType('withdraw') }}
                    >
                        <img src={outcomeBtn} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}