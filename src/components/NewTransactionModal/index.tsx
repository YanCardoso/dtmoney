import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles"
import closeImg from "../../assets/close.svg"
import incomeBtn from "../../assets/income.svg"
import outcomeBtn from "../../assets/outcome.svg"

interface TransactionModalProps {
    isOpen: boolean;
    onModalClose: () => void;
}

export function NewTransactionModal({ isOpen, onModalClose }: TransactionModalProps) {

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();        
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
                <h2>teste do modal</h2>

                <input 
                placeholder="Título" 
                value={title}
                onChange={event => setTitle(event.target.value)} 
                />
                <input 
                placeholder="Valor"
                type="number" 
                value={value === 0 ? '' : value }
                onChange={event => setValue(Number(event.target.value))}

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