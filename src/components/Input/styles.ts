import styled from "styled-components";

export const InputFakeContainer = styled.div`
  > p {
    margin-top: 0.25rem;
  }
`

export const InputFake = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  width: 10.5rem;
  height: 3.5rem;
  border: 1px solid ${({ theme }) => theme.colors["base-border"]};
  border-radius: 4px;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors["base-text-500"]};
  box-shadow: 0px 5px 3px ${({ theme }) => theme.colors["base-border"]};

  outline: 0;

  margin-top: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors["base-text-100"]};
  }

`;

export const InputStyled = styled.input`
  background: none;
  outline: none;
  border: 0;

  width: 100%;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-text-100"]};
  }
`;
