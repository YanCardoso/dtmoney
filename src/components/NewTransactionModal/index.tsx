import Modal from "react-modal";
import { Container } from "./styles"
import closeImg from "../../assets/close.svg"

interface TransactionModalProps {
    isOpen: boolean;
    onModalClose: () => void;
}

export function NewTransactionModal({ isOpen, onModalClose }: TransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onModalClose}
            overlayClassName="trasactionModal-overlay"
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
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}