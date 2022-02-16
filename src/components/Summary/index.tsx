import { Container } from "./styles";
import { BsArrowUpCircleFill } from 'react-icons/bs'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <BsArrowUpCircleFill/>
                </header>
                <strong>1000€</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <BsArrowUpCircleFill/>
                </header>
                <strong>1000€</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <BsArrowUpCircleFill/>
                </header>
                <strong>1000€</strong>
            </div>
        </Container>
    )
}