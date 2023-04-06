import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, 'sans-erif';
        -webkit-font-smoothing: antialiased;
    }

    input, textarea, button {
        font-size: ${({ theme }) => theme.textSize["text-m"]};
        font-weight: 600;
        font-family: Open Sans;
    }

    button {
        cursor: pointer;
    }
`;
