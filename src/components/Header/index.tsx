import { Container, Content } from './styles'
import logo from '../../assets/logo.svg'

interface HeaderProps {
    onOpenTransactionModal: () => void
}

export function Header({onOpenTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button onClick={onOpenTransactionModal}>
                    Nova transação
                </button>
            </Content>

        </Container>
    )
}