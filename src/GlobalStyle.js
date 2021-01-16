import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }
    body{
        font-family: 'Roboto', sans-serif;
    }
`;