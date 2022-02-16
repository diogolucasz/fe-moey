import logoMoey from '../../assets/logo-moey.svg';
import { Container, Content } from './styles';

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoMoey} alt="Moey" />
                <button type="button">New Transaction</button>
            </Content>
        </Container>
    )
}