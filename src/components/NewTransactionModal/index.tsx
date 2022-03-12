import Modal from "react-modal";
import { Container } from "./styles"

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
            <h1>teste do modal</h1>

            <Container>
                <input placeholder="Título" />
                <input placeholder="Valor" type="number" />
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}