import styled from "styled-components";

export const InputStyled = styled.input`
    width: 10.5rem;
    height: 3.5rem;
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 4px;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors["base-text-500"]};
    box-shadow: 0px 5px 3px ${({ theme }) => theme.colors["base-border"]};

    outline: 0;

    margin-top: 0.5rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-text-100"]};
    }
`