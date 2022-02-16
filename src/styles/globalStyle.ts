import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --header: #71b9e3;
        --background: #eceef0;
        --dark-blue: #093256;
        --yellow: #ffce53;
        --white: #fafafa;
        --text-body: #093256;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        @media (max-wdith: 1080px) {
            font-size: 93.75%;
        }

        @media (max-wdith: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
`