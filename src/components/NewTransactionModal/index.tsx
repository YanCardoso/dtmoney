import { useState } from "react";
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

            <Container>
                <h2>teste do modal</h2>

                <input placeholder="Título" />
                <input placeholder="Valor" type="number" />

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

                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}