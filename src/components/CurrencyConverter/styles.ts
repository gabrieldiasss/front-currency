import styled from "styled-components";

export const ConverterContainer = styled.div``;

export const ConvertCurrencyForm = styled.div``;

export const ConvertValue = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ConvertCurrencyField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }

  input[type="number"] {
    width: 10.5rem;
    height: 3.5rem;
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 4px;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    box-shadow: 0px 5px 3px ${({ theme }) => theme.colors["base-border"]};

    outline: 0;

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;

export const ConvertSelectedMethodContainer = styled.div`
  margin-top: 1rem;

  label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }
`;

export const ConvertSelectedMethodInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 1rem 0;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;

  padding: 0 1rem;
  border-radius: 8px;

  height: 3.5rem;

  gap: 1rem;

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors["base-label"]};

  }
`;
