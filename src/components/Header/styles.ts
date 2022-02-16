import styled from "styled-components";

export const Container = styled.header`
    background: var(--header);
    border-bottom: 0.3rem solid;
    border-color: var(--dark-blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 2rem 8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 17rem;
    }

    button {
        font-size: 1rem;
        font-weight: bold;
        padding: 0 2rem;
        border: 0;
        height: 3rem;
        border-radius: 10rem;

        background: var(--yellow);
        color: var(--dark-blue);
        
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`