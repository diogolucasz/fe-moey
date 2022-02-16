import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Table() {

    useEffect(()=> {
        api.get('transactions').then(response => console.log(response.data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           sahsdhodsaihoiasdhosdihsado 
                        </td>
                        <td>12000</td>
                        <td>web dev</td>
                        <td>25/14/1998</td>
                    </tr>
                    <tr>
                        <td>
                           sahsdhodsaihoiasdhosdihsado 
                        </td>
                        <td>12000</td>
                        <td>web dev</td>
                        <td>25/14/1998</td>
                    </tr>
                    <tr>
                        <td>
                           sahsdhodsaihoiasdhosdihsado 
                        </td>
                        <td>12000</td>
                        <td>web dev</td>
                        <td>25/14/1998</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}