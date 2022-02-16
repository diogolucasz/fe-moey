import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--dark-blue);
            font-weight: 400px;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 2rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--white);
            color: var(--text-body);
            border-radius: 0.2rem;

            &:first-child {
                color: var(--dark-blue);
            }
        }
    }
`